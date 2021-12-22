import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  return <input className={classes.input} {...props} />;
}
