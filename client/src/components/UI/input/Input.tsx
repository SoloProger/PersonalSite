import { InputHTMLAttributes } from 'react';
import classes from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
export default function Input(props: InputProps) {
  return <input className={classes.input} {...props} />;
}
