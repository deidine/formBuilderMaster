import "../App.css";
import React, { useEffect, useState } from "react";
import Modal from "../components/Model";
import { FormProps } from "../types/form";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import AddInput2 from "./AddInput2";
 
type Form = Omit<FormProps, "redirectFunction">; //annuller redirectFunction fron the type
 
export default function FormBuilderTest<T extends FieldValues>({
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
        placeholder:"enter " + inputType,
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
    <TopBarTest/>
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
                    input.element === "input" ? (
                      <>
                        <AddInput2
                          deleteIndex={function (index: number): void {
                            handleDeleteInput(index);
                          }}
                          {...input}
                          index={index}
                          label={index.toString()}
                          register={register}
                         
                          getValues={getValues}
                        />
                        
                      </>
                    ) : (
                      <></>
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

export function TopBarTest() {
  return (
    <div className="py-3 border-b max-w-2xl mx-auto mt-3 border shadow-sm rounded-xl">
      <div dir="ltr" data-orientation="horizontal" className="w-60 mx-auto">
        <div className="inline-flex gap-x-3 h-10 items-center justify-center p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 w-full rounded-lg text-sm bg-zinc-50">
          <button className="btn2 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14">
            Save
          </button>
     
          <button
          type="button" className="btn2 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14">

            Preview
          </button>  
             <button className=" btn2  hover:bg-zinc-900/90  h-9 px-3 rounded-lg border bg-zinc-100 text-zinc-800 hover:text-white">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
