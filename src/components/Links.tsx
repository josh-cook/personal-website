import Github from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Link from "./Link";

export const Links = () => {
  return (
    <nav className="links" aria-label="Social links">
      <Link
        link="https://github.com/josh-cook"
        imageLink={Github}
        linkText="GitHub"
      />
      <Link
        link="https://www.linkedin.com/in/joshua-c-95b61625/"
        imageLink={LinkedIn}
        linkText="LinkedIn"
      />
    </nav>
  );
};

export default Links;
