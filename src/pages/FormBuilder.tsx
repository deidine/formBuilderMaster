import "../App.css";
import React, { useEffect, useState } from "react";
import Modal from "../components/Model";
import { FormProps } from "../types/form";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import AddInput from "../components/fields/AddInput";

type Form = Omit<FormProps, "redirectFunction">; //annuller redirectFunction fron the type

export default function FormBuilder<T extends FieldValues>({
  data,
  children,
  title,
  className = "",
}: Form) {
  const [alldata, setAllData] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [previousData, setPreviousData] = useState([]);

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

  const handleDeleteInput = (index: number) => {
    // setPreviousData( alldata);
    setAllData((prevData) => prevData.filter((_, i) => i !== index));
  };
  const handleUndo = () => {
    setAllData(previousData);
    setPreviousData([]);
  };

  const onSubmit: SubmitHandler<T> = async (data: { [x: string]: any }) => {};

  return (
    <>
      <form
        className="max-w-2xl mx-auto mt-3 border shadow rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-3 p-8 " id="form-playground">
          <div className="space-y-3 p-8 relative flex-1">
            {alldata &&
              alldata.map((input, index) => {
                const { name } = input;
                if (inputNames.has(name)) {
                  throw new Error(
                    `Two Form Fields cannot share the same name (${name})`
                  );
                }
                inputNames.add(name);
                return (
                  <div
                    key={`${input.name}-${index}`}
                    className="group relative space-y-2 flex-1"
                  >
                    {input.element !== undefined &&
                    input.element === "select" ? (
                      <></>
                    ) : input.element !== undefined &&
                      input.element === "textarea" ? (
                      <></>
                    ) : (
                      <>
                        {/* <AddInput
                          deleteIndex={function (index: number): void {
                            handleDeleteInput(index);
                          }}
                          {...input}
                          index={index}
                          label={input.label}
                          register={register}
                          getValues={getValues}
                        /> */}
                        {previousData.length > 0 && (
                          <button
                            className="btn"
                            type="button"
                            onClick={handleUndo}
                          >
                            Undo
                          </button>
                        )}
                      </>
                    )}
                    {errors[name]?.message && (
                      <span className="text-sm text-red-500">
                        {`${errors[name]?.message}`}
                      </span>
                    )}
                  </div>
                );
              })}
            <button className="sbmtBtn" type="submit">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-plus w-5 h-5 text-zinc-500"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Insert a form block
        </button>
        {showModal && <Modal setOpenModal={handleOpenModal} />}
      </div>
    </>
  );
}
