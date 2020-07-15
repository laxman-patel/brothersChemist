import React from "react"
import logoDark from "../assets/logo-dark.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"
import fb from "../assets/fb.svg"
import line from "../assets/line.svg"
import { Link } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div classname={footerStyles.nav}>
        <img src={logoDark} alt="Logo" />
        {window.innerWidth > 600 ? <img src={line} alt="line" /> : <></>}
        <nav>
          <Link to="/">Home</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/blog">Blog</Link>

          <Link to="/about">About</Link>
        </nav>
      </div>

      <section className={footerStyles.links}>
        <a
          target="__blank"
          href="https://www.google.com/maps/place/Brothers+Chemist+%26+Lifestyle+Store/@12.926479,77.6689354,18z/data=!4m5!3m4!1s0x3bae139dec3660a9:0xcc34454e58f45a1e!8m2!3d12.9265365!4d77.6695738"
        >
          <img src={location} alt="location" />
        </a>

        <a target="__blank" href="tel:725-922-7025">
          <img src={phone} alt="phone" />
        </a>

        <a target="__blank" href="#">
          <img src={fb} alt="fb" />
        </a>

        <a href="#" target="__blank">
          <img src={mail} alt="mail" />
        </a>
      </section>
    </footer>
  )
}

export default Footer
