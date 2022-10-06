import React from "react";
import { InputProps } from "../../../types/ui/input/input";
import classes from "./Input.module.css";

export default function Input(props: InputProps) {
  return <input className={classes.input} {...props} />;
}
