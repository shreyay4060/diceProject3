import React from "react";
import styles from "./HomePage.module.css";


export default function Button(props){
    return <>
    <button className={styles.button} onClick={props.handleClick} href={props.id}>{props.name}</button>

    </>
}