import React from "react"
import logoLight from "../assets/logo-light.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import { slide as Menu } from "react-burger-menu"
import "./headermenu.css"
const Header = () => {
  return (
    <header>
      <img src={logoLight} alt="Logo" />

      {window.innerWidth > 600 ? (
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
