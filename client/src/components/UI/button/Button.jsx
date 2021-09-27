import React from 'react'
import classes from "./Button.module.css";

export default function Button({children, ...props}) {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    )
}
