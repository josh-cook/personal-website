type LinkProps = {
  link: string
  imageLink: string
  linkText: string
}

export const Link = ({ link, imageLink, linkText }: LinkProps) => {
  return (
    <a className="social-link" href={link}>
      <img src={imageLink} alt="" />
      <span>{linkText}</span>
    </a>
  )
}

export default Link
