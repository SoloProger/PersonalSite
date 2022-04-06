import React from 'react'
import classes from "./Button.module.scss";

export default function Button({children, ...props}) {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    )
}
