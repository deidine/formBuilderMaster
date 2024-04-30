import { Input } from "./input";

  type InputProps = {
  deleteIndex: (index: number) => void;
  index: number;
  preview:booleans
} & Input;
