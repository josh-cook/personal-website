import React from "react";

export const Link = (props) => {
  return (
    <div className="link">
      <a href={props.link}>
        <span className={`link__img link__img--${props.linkText}`}>
          <img src={props.imageLink} alt="" />
        </span>
        <span className={`link__text link__text--${props.linkText}`}>
          {props.linkText}
        </span>
      </a>
    </div>
  );
}

export default Link;
