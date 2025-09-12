import React from "react";
import "./Footer.css";

export default function Footer() {
    
    return (
    <footer className="App-footer">
        <em><p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p></em>
    </footer>
    )
}