import { useState } from "react";
import { InputProps } from "../types/InputProps";

export default function AddInput({
  type,
  label,
  register,
  required,
  minLength,
  maxLength,
  min,
  name,
  max,
  deleteIndex,
  disabled,
  pattern,
  index,
  placeholder,
}: InputProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState(label || "");
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const regPattern = pattern
    ? typeof pattern === "string"
      ? new RegExp(pattern)
      : { value: new RegExp(pattern.value), message: pattern.message }
    : undefined;

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"));
    if (draggedIndex !== index) {
      const offsetX =
        e.clientX - parseInt(e.dataTransfer.getData("dragOffsetX"));
      const offsetY =
        e.clientY - parseInt(e.dataTransfer.getData("dragOffsetY"));

      setTransform({ x: offsetX, y: offsetY });
    }
  };
  return (
    <div
      className="relative"
      draggable="true"
      onDragStart={(e) => {
        e.dataTransfer.setData(
          "dragOffsetX",
          (e.clientX - e.currentTarget.getBoundingClientRect().left).toString()
        );
        e.dataTransfer.setData(
          "dragOffsetY",
          (e.clientY - e.currentTarget.getBoundingClientRect().top).toString()
        );
        handleDragStart(e);
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }}
    >
      {/* Drag icon */}
      <button
        type="button"
        className="absolute -left-5 flex-none mt-3 cursor-grab duration-150
         text-zinc-400 hidden group-hover:block hover:text-zinc-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-grip-vertical w-5 h-5"
        >
          <circle cx="9" cy="12" r="1"></circle>
          <circle cx="9" cy="5" r="1"></circle>
          <circle cx="9" cy="19" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
          <circle cx="15" cy="5" r="1"></circle>
          <circle cx="15" cy="19" r="1"></circle>
        </svg>
      </button>
      <div
        className="absolute w-6 inline-block text-right h-fit top-0 bottom-0
       translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100"
      >
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-md w-3 px-2 h-6 border-none hover:border"
          type="button"
          id="radix-:r23:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="w-4 h-4 flex-none"
          >
            <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="absolute -top-24 right-0 z-50  inline-flex items-center justify-center
          translate-y-[100%] my-auto  w-40   bg-white border border-gray-200 rounded-lg shadow-lg"
        >
          <div
            role="separator"
            aria-orientation="horizontal"
            className="-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800"
          ></div>
          <ul className="flex  flex-col p-1 space-y-2 rounded-lg px-1 py-1">
            <li className="py-2  px-4 hover:bg-gray-100 font-medium  cursor-pointer">
              Menu Item 1
            </li>
            <li className="py-2  px-4 hover:bg-gray-100 font-medium  cursor-pointer">
              Menu Item 2
            </li>
            <li
              className="inline-flex items-center whitespace-nowrap font-medium  py-2  px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                
                deleteIndex(index);
                console.log("Delete option clicked");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" mr-2 lucide lucide-trash w-4 h-4"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
              Delete
            </li>
          </ul>
        </div>
      )}
      <label
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-zinc-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="flex h-10 w-full text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:bg-white border border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 shadow-sm rounded-lg py-2 px-3"
        type={type}
        autoComplete="on"
      />
    </div>
  );
}
