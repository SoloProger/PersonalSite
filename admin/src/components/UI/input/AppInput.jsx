import React from "react";
import classes from "./AppInput.module.css";

export default function Input(props) {
  return <input className={classes.input} {...props} />;
}
