type LinkProps = {
  link: string;
  imageLink: string;
  linkText: string;
};

export const Link = ({ link, imageLink, linkText }: LinkProps) => {
  return (
    <div className="link">
      <a href={link}>
        <span className={`link__img link__img--${linkText}`}>
          <img src={imageLink} alt="" />
        </span>
        <span className={`link__text link__text--${linkText}`}>
          {linkText}
        </span>
      </a>
    </div>
  );
};

export default Link;
