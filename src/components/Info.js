import React from "react";
import myPhoto from "../images/myphoto.jpg"

export default function About(){
    return (
        <div className="info--section">
            <img className="info--photo" src={myPhoto} alt="dev" />
            <h1 className="info--name">Christian Weiskopf</h1>
            <h4 className="info--title">Web Developer</h4>
            <h6 className="info--email">Chris@chriscancode.io</h6>
            <div className="info--buttons">
                <button className="info--buttons--email">Email</button>
                <button className="info--buttons-linkedin">LinkedIn</button>
            </div>
        </div>
    )
}