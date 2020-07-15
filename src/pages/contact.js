import React from "react"
import Layout from "../components/Layout"
import Hand from "../assets/hand.png"

import contactStyles from "./contact.module.scss"

const Contact = () => {
  const handleClick = e => {
    e.preventDefault()
  }

  return (
    <div>
      <Layout>
        <div className={contactStyles.container}>
          <div className={contactStyles.text}>
            <p>CONTACT US</p>
            <h1>
              Let’s get in
              <br /> Touch.
            </h1>
          </div>

          <img className={contactStyles.hand} src={Hand} alt="hand" />
          <div className={contactStyles.message}>
            <h2>Send us a Message</h2>
            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="contact-form" value="contact" />
              <label>
                Full Name
                <input required type="text" name="name" id="name" />
              </label>
              <label>
                E-mail
                <input required type="email" name="email" id="email" />
              </label>
              <label>
                Message
                <textarea required type="text" name="message" id="message" />
              </label>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
