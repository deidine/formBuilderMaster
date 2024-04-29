import "../App.css";
import React, { useEffect, useState } from "react";
import Modal from "../components/Model";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import AddInput from "../components/fields/AddInput";
import { FormProps } from "../types/form";
type Form = Omit<FormProps, "redirectFunction">;

export default function FormBuilder<T extends FieldValues>({
  data,
  children,
  title,
  className = "",
}: Form) {
  const [alldata, setAllData] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [inputType, setInputType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<T>({});

  useEffect(() => {
    setAllData(data);
  }, [data]);

  const inputNames: Set<string> = new Set();
  
  const handleOpenModal = (modalOpen: boolean, inputType: string) => {
    setShowModal(modalOpen);
    setInputType(inputType);
    setAllData((prev) => [
      ...prev,
      {
        element: "input",
        name: "dd" + Date(),
        type: inputType,
        label: inputType,
        placeholder: "",
      },
    ]);
    console.log("Selected input type:", inputType);
  };

  if ((!children && !data) || (children && data)) {
    throw new Error(
      'Either "children" components or "data" prop must be provided, but not both.'
    );
  }


  const handleDeleteInput = (name: string) => {
    // if (window.confirm("Are you sure you want to delete this todo?")) {
    // }
    const updatedTodos = alldata.filter((data) => data.name !== name);
    setAllData(updatedTodos);
  };


  const onSubmit: SubmitHandler<T> = async (data: { [x: string]: any }) => { };

  return (
    <>
      {" "}
      <form
        className="max-w-2xl mx-auto mt-3 border shadow rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" space-y-3 p-8" id="form-playground">
          <div className="space-y-3 p-8  relative   flex-1">
            {alldata
              ? alldata.map((input, index) => {
                  const { name } = input;
                  if (inputNames.has(name)) {
                    throw new Error(
                      `Two Form Fields cannot share a same name!! (${name})`
                    );
                  }
                  inputNames.add(name);
                  return (
                    <div
                      key={`${input.name}-${index}`}
                      className="group  relative space-y-2  flex-1"
                    >
                      {input.element !== undefined &&
                      input.element === "select" ? (
                        <></>
                      ) : input.element !== undefined &&
                        input.element === "textarea" ? (
                        <></>
                      ) : (
                        <>
                          <AddInput
                            {...input}
                            label={input.label}
                            register={register}
                            getValues={getValues}
                          />
                          <button
                            onClick={() => handleDeleteInput(input.name)}
                            type="button"
                          >
                            delete
                          </button>
                        </>
                      )}
                      {errors[name]?.message && (
                        <span className="text-sm text-red-500">
                          {`${errors[name]?.message}`}
                        </span>
                      )}
                    </div>
                  );
                })
              : "no data"}
            <button className="sbmtBtn">
              <input
                className="outline-none bg-transparent w-full text-center"
                value="Submit"
              />
            </button>
          </div>
        </div>
      </form>
      <div className="max-w-2xl mx-auto mt-3 border shadow rounded-xl">
        <button
          className="btn"
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          {" "}
          Insert a form block
        </button>
        {showModal && <Modal setOpenModal={handleOpenModal} />}
      </div>
    </>
  );
}
