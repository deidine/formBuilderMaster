import React, { useEffect, useState } from "react";
import Modal from "../components/Model";
import { FormProps } from "../types/form";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import AddInput2 from "./AddInput2";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type Form = Omit<FormProps, "redirectFunction">;

export default function FormBuilderTest<T extends FieldValues>({
  data,
  children,
  title,
  className = "",
}: Form) {
  const [alldata, setAllData] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [previousData, setPreviousData] = useState([]);
const [preview,setPreview]=useState(false);
  const [inputType, setInputType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<T>({mode:"all"});

  useEffect(() => {
    setAllData(data);
  }, [data]);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const items = Array.from(alldata);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAllData(items);
  }

  const handleOpenModal = (modalOpen: boolean, inputType: string) => {
    setShowModal(modalOpen);
    setInputType(inputType);
    setAllData((prev) => [
      ...prev,
      {
        element: "input",
        name: "dd" + Date.now(),
        type: inputType,
        label: inputType,
        placeholder: "enter " + inputType,
      },
    ]);
    console.log("Selected input type:", inputType);
  };

  const handleDeleteInput = (index: number) => {
    setAllData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleUndo = () => {
    setAllData(previousData);
    setPreviousData([]);
  };
  const handlePreviewToggle = () => {
    setPreview(!preview); // Toggle preview state
  };

  const onSubmit: SubmitHandler<T> = async (data: { [x: string]: any }) => {

    if(preview){
      console.log(data)
    }
  };
  return (
    <>
      <TopBarTest />
      <form
        className="max-w-2xl mx-auto mt-3 border shadow rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-3 p-8 " id="form-playground">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="data" type="COLUMN" direction="vertical">
              {(provided) => (
                <div
                  className="space-y-3 p-8 relative flex-1"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {alldata.map((input, index) => {
                    return (
                      <Draggable
                        key={index}
                        draggableId={input.name}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="characters group relative space-y-2 flex-1"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            {input.element === "input" && (
                              <AddInput2
                              preview={preview} // Pass the preview state
                              deleteIndex={handleDeleteInput}
                              required={true}
                              {...input}
                              index={index}
                              label={index.toString()}
                              register={register}
                              getValues={getValues}
                            />
                            )}
                            <p>{input.name}</p>
                            {errors?.message && (
                        <span className="text-sm text-red-500">
                          {`${errors?.message}`}
                        </span>
                      )}
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                  <button className="sbmtBtn" type="submit">
                    <input
                      className="outline-none bg-transparent w-full text-center"
                      value="Submit"
                    />
                  </button>
                </div>
              )}
            </Droppable>
          </DragDropContext>
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus w-5 h-5 text-zinc-500"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Insert a form block
        </button>
        {showModal && <Modal setOpenModal={handleOpenModal} />}
        <button
          type="button"
          className="btn2 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14"
          onClick={handlePreviewToggle} // Toggle preview on click
        >
          {preview ? "Edit" : "Preview"}
        </button>
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
           
          <button className="btn2 hover:bg-zinc-900/90 h-9 px-3 rounded-lg border bg-zinc-100 text-zinc-800 hover:text-white">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
