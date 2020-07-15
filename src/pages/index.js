import React from "react"
import Layout from "../components/Layout"
import homeStyles from "./home.module.scss"
//images import
import arrow from "../assets/arrow.svg"
import cream from "../assets/cream.png"
import dettol from "../assets/dettol.png"
import pampers from "../assets/pampers.png"
import tablets from "../assets/tablets.png"
import mask from "../assets/mask.png"
import girl from "../assets/girl.png"
import parcel from "../assets/parcel.png"
import flag from "../assets/flag.png"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Home = () => {
  return (
    <div>
      <Layout>
        <section className={homeStyles.main}>
          <h1>
            Being Healthy <br /> doesn’t Has to be so <br /> damn Hard.
          </h1>
          <AniLink
            paintDrip
            duration={1}
            hex="#1e272e"
            className={homeStyles.button}
            to="/contact"
          >
            Contact <img src={arrow} alt="arrow" />
          </AniLink>
          <img className={homeStyles.dettol} src={dettol} alt="arrow" />
          <img className={homeStyles.pampers} src={pampers} alt="pampers" />
          <img className={homeStyles.tablets} src={tablets} alt="tablets" />
          <img className={homeStyles.mask} src={mask} alt="mask" />
          <img className={homeStyles.cream} src={cream} alt="cream" />
        </section>
        <section className={homeStyles.f1}>
          <img src={girl} alt="healthy-girl" />
          <div className={homeStyles.background}></div>
          <div className={homeStyles.text}>
            <h1>Your heath and well-being is our foremost duty.</h1>
            <p>
              We want you to live a healthy and an amazing life through our
              products and services. It’s our duty as a chemist store to provide
              you an enjoyable life.
            </p>
          </div>
        </section>
        <section className={homeStyles.f2}>
          <img src={parcel} alt="parcel" />
          <div className={homeStyles.text}>
            <h1>We are delivering health right to your door.</h1>
            <p>
              We home-deliver all of our products in Banglore area to ensure
              your safety. we take the risks so that you don't have to.
            </p>
          </div>
        </section>
        <section className={homeStyles.f3}>
          <img src={flag} alt="indian flag" />
          <div className={homeStyles.text}>
            <h1>We are 100% commited to made in India.</h1>
            <p>
              We try as much as possible to source our products from national
              manufaturers and suppliers which makes our nation grow.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home
