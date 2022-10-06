import React from 'react'
import { ButtonProps } from '../../../types/ui/button/button';
import classes from "./Button.module.scss";



export default function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    )
}
