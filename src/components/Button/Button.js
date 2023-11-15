import React from "react";
import './Button.css'

export default function Button({value, onClick}){
    return(
        <button className="button" onClick={onClick}>{value}</button>
    )
}