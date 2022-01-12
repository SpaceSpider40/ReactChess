import React from "react";
import style from "../Style/board.module.css"

export default function Field(props){
    return(
        <button className={props.colour} onClick={props.onClick} style={props.style}></button>
    )
}