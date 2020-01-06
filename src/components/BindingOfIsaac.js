import  React from "react";
import IsaacIcon from '../assets/boi.png';

function BindingOfIsaac() {
    return (
        <div className="boi" title="Binding Of Isaac: Challenge Generator">
            <a href="https://josh-cook.github.io/challenge-generator/">
                <img className="boiIcon" src={IsaacIcon} style={{width: 100}} alt="isaacIcon"/>
            </a>
        </div>
    );
}

export default BindingOfIsaac;