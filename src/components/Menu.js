import React from 'react';
import MenuIcon from '../assets/menu.png';

function Menu() {
    return ( 
        <a href="https://github.com/josh-cook" target="_blank">
            <img src={MenuIcon} style={{width: 50}} alt="MenuIcon"/>
        </a>
    );
}

export default Menu;