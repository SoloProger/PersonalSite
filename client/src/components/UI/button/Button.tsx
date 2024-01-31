import { ButtonHTMLAttributes, ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
}
