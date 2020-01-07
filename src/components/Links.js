import React from 'react';
import Github from '../assets/github.svg';
import Twitter from '../assets/twitter.svg';
import LinkedIn from '../assets/linkedin.svg';
import Link from '../components/Link';

function Links() {
    return ( 
        <div className="links">
            <Link link="https://twitter.com/_CptDreadBeard" imageLink={Twitter} linkText="tw"/>
            <Link link="https://github.com/josh-cook" imageLink={Github} linkText="gh"/>
            <Link link="https://www.linkedin.com/in/joshua-cook-95b61625/" imageLink={LinkedIn} linkText="li"/>
        </div>
    );
}

export default Links;