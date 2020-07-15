import React, { useState, useEffect } from "react"
import logoLight from "../assets/logo-light.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import { slide as Menu } from "react-burger-menu"
import "./headermenu.css"

const Header = () => {
  const [hasRan, setHasRan] = useState(false)
  const [screenSize, setScreenSize] = useState({
    height: 0,
    width: 0,
  })
  const updateScreenSize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }
  useEffect(() => {
    if (!hasRan) {
      setHasRan(true)
      updateScreenSize()
    }
    window.addEventListener("resize", updateScreenSize)
    return () => {
      window.removeEventListener("resize", updateScreenSize)
    }
  }, [screenSize])

  return (
    <header>
      <img src={logoLight} alt="Logo" />

      {screenSize.width > 600 ? (
        <nav>
          {" "}
          <ul>
            <li>
              <AniLink
                cover
                bg="#1e272e"
                activeClassName={headerStyles.activeLink}
                to="/"
              >
                Home
              </AniLink>
            </li>
            <li>
              <AniLink
                cover
                bg="#1e272e"
                activeClassName={headerStyles.activeLink}
                to="/contact"
              >
                Contact
              </AniLink>
            </li>
            <li>
              <AniLink
                cover
                bg="#1e272e"
                activeClassName={headerStyles.activeLink}
                to="/blog"
              >
                Blog
              </AniLink>
            </li>
            <li>
              <AniLink
                cover
                bg="#1e272e"
                activeClassName={headerStyles.activeLink}
                to="/about"
              >
                About
              </AniLink>
            </li>
          </ul>
        </nav>
      ) : (
        <Menu right className={"my-menu"}>
          <Link activeClassName="menuActiveLink" to="/">
            Home
          </Link>
          <Link activeClassName={headerStyles.menuActiveLink} to="/contact">
            Contact
          </Link>
          <Link activeClassName={headerStyles.menuActiveLink} to="/blog">
            Blog
          </Link>
          <Link activeClassName={headerStyles.menuActiveLink} to="/about">
            About
          </Link>
        </Menu>
      )}
    </header>
  )
}

export default Header
