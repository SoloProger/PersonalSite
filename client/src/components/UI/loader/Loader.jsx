import React from 'react';
import classes from "./Loader.module.css";

export default function Loader() {
    return (
        <div class={classes.lds_dual_ring}></div>
    )
}
