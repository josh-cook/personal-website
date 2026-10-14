import { Links } from './Links'

export const Footer = () => {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <div className="footer-eyebrow">
        <p className="eyebrow">Want to get in touch?</p>
      </div>

      <div className="contact-bottom">
        <Links />
      </div>
    </footer>
  )
}

export default Footer
