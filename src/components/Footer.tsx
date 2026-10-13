import { Links } from './Links'

export const Footer = () => {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">Want to get in touch?</p>
      <h2 id="contact-title">Find me on GitHub</h2>
      <div className="contact-bottom">
        <Links />
      </div>
    </footer>
  )
}

export default Footer
