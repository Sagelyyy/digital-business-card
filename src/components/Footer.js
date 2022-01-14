import React from "react";
import facebook from "../images/facebook.png"
import github from "../images/github.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"

export default function Footer() {
    return (
        <footer className="footer">
            <img className="footer--image" src={twitter} alt="twitter" />
            <img className="footer--image" src={facebook} alt="facebook" />
            <img className="footer--image" src={instagram} alt="instagram" />
            <img className="footer--image" src={github} alt="github" />
        </footer>
    )
}