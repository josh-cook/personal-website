import React from "react";
import Github from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Link from "./Link";

export const Links = () => {
  return (
    <div className="links">
      <Link
        link="https://github.com/josh-cook"
        imageLink={Github}
        linkText="gh"
      />
      <Link
        link="https://www.linkedin.com/in/joshua-c-95b61625/"
        imageLink={LinkedIn}
        linkText="li"
      />
    </div>
  );
}

export default Links;
