import React from 'react';
import logo from '../assets/github.svg';

function GithubLinkImage() {
    return ( 
        <a href="https://github.com/josh-cook">
            <img src={logo} style={{width: 100}} alt="GithubLogo"/>
        </a>
    );
}

export default GithubLinkImage;