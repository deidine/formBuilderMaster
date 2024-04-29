import { Input } from "../../types/input";

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
  disabled,
}: Input) {
  return (
    <>
      {" "}
      <button
        type="button"
        className="absolute -left-12 flex-none mt-3 cursor-grab 
      duration-150 text-zinc-400 opacity-0 group-hover:opacity-100  
      group-hover:block  hover:text-zinc-600"
      >
        {" "}
        drag
      </button>
      <div
        className="absolute w-6 inline-block text-right h-fit top-0 bottom-0
         translate-y-[100%] my-auto -right-10 opacity-0 group-hover:opacity-100"
      >
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm
             font-medium ring-offset-white transition-colors focus-visible:outline-none 
             focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 
             disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950
              dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100
               hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800
                dark:hover:text-zinc-50 rounded-md w-3 px-2 h-6 border-none hover:border"
          type="button"
        >
          {" "}
          ...
        </button>
      </div>
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-700 dark:text-zinc-400">
        {label ? (
          <input
            className="w-full outline-none bg-transparent"
            type="text"
            value={label
              .split("")
              .map((letter: string) =>
                letter === letter.toUpperCase()
                  ? ` ${letter.toUpperCase()}`
                  : letter.toUpperCase()
              )
              .join("")}
          />
        ) : (
          <></>
        )}
      </label>
      <input
        id={name}
        name={name}
        {...register(name, {
          required,
          minLength,
          maxLength,
          disabled,
          min,
          max,
        })}
        className="flex h-10 w-full text-sm ring-offset-white file:border-0 file:bg-transparent 
        file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2
         disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-zinc-950
          dark:placeholder:text-zinc-400 dark:text-zinc-300 bg-white focus-visible:bg-white
           border border-zinc-200 duration-100 placeholder:text-zinc-400 text-zinc-600
            hover:border-zinc-200 focus:border-zinc-200 hover:bg-white ring-2 ring-transparent
             focus:bg-white focus-visible:ring-indigo-400 dark:bg-zinc-800 dark:border
              dark:border-zinc-800 dark:focus-visible:ring-indigo-400 focus-visible:ring-offset-0 
              focus-visible:duration-0 shadow-sm rounded-lg py-2 px-3 dark:hover:bg-zinc-800/80"
        type={type}
        autoComplete="on"
      />
    </>
  );
}
