import { TextArea as TexetArea } from "../../types/textarea";

type TextAreaProps = Omit<TexetArea, "register" | "element">;

const TextAreaGeneratedByForm = ({
  name,
  register,
  placeholder,
  required,
  rows,
  minLength,
  maxLength,
  disabled,
  className,
  label,
}: TexetArea) => (
  <>
    <label htmlFor="comment" className="sr-only">
      Your{" "}
      {label
        ? label
        : name
            .split("")
            .map((letter: string) =>
              letter === letter.toUpperCase() ? ` ${letter}` : letter
            )
            .join("")}
    </label>
    <textarea
      id={name}
      rows={rows || 6}
      className={`w-full min-h-[125px] px-2 py-2 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-900 ${className}`}
      placeholder={placeholder}
      {...register(name, { required, minLength, maxLength, disabled })}
    ></textarea>
  </>
);

const TextArea = ({
  name,
  placeholder,
  rows,
  required,
  minLength,
  maxLength,
  disabled,
  className,
  label,
}: TextAreaProps) => {
  const options = { required, rows, minLength, maxLength, label, disabled };
  console.log(options);

  return (
    <>
      <label htmlFor="comment" className="sr-only">
        Your {name}
      </label>
      <textarea
        id={name}
        rows={rows || 6}
        className={`w-full min-h-[125px] px-2 py-2 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-900 ${className}`}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export  { TextArea, TextAreaGeneratedByForm };
