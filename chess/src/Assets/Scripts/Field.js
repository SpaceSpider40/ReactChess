import React from "react";


export default function Field(props){
    return(
        <button className={props.colour} onClick={props.onClick} style={props.style}></button>
    )
}