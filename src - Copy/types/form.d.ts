import { ReactNode } from "react";
import { FormInput } from "./input";
import { FormSelect } from "./select";
import { FormTextArea } from "./textarea";

export type FormData = (FormInput | FormSelect | FormTextArea)[];

export type FormProps = {
  children?: ReactNode;
  data: FormData;
  title?: string;
  className?: string;
};
