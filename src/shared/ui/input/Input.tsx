import classes from './Input.module.css';
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
export default function Input(props: InputProps) {
  return <input className={classes.input} {...props} />;
}
