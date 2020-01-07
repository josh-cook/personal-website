import React from "react";

function Link(props) {
    return (
        <div className="link">
        <a href={props.link}>
            <span className="link__img">
                <img src={props.imageLink} alt="" />
            </span>
            <span className="link__text">{props.linkText}</span>
        </a>
        </div>
    );
}

export default Link;