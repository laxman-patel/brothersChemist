import React from "react"
import Layout from "../components/Layout"
import aboutStyles from "./about.module.scss"

const About = () => {
  return (
    <div>
      <Layout>
        <div className={aboutStyles.main}>
          <p>Who We Are</p>
          <h2>
            We’re a chemist shop in Banglore area who is on a mission to{" "}
            <strike> make money </strike> provide{" "}
            <span className={aboutStyles.green}>Pharmacy products</span> and
            services to make this world more{" "}
            <span className={aboutStyles.green}>Healthy</span> and enjoyable for
            others.
          </h2>
        </div>
        <div className={aboutStyles.f1}>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1588384474880-01be56a6e225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              alt="parcel"
            />
          </figure>
          <div className={aboutStyles.text}>
            <h1>Meet the founders of Brothers Chemist</h1>
            <p>
              It all started in 2017 when{" "}
              <span className={aboutStyles.red}>Suresh</span> and{" "}
              <span className={aboutStyles.red}>Madharam</span> had the vision
              of making others life healthier which resulted in inaguaration of
              Brothers chemist and lifestyle store.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
