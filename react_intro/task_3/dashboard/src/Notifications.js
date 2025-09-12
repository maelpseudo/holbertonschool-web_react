import React from "react";
import {getLatestNotification} from "./utils";
import './Notifications.css';

export default function Notification(){

    function HandleClick(e){
        e.preventDefault();
        console.log("Close button has been clicked");
        
    }
    return (
        <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button aria-label="Close" onClick={HandleClick}>x
        </button>
        <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li dangerouslySetInnerHTML={{__html: getLatestNotification()}} data-priority="urgent"></li>
        </ul>
        </div>
    )
}