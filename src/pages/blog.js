import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(query)

  return (
    <Layout>
      <div className={blogStyles.heading}>
        <h1>Our Health blog</h1>
        <p>
          A place where you can get advice
          <br /> on living a healthy life.
        </p>
      </div>
      <div className={blogStyles.blogs}>
        {data.allMarkdownRemark.edges.map(item => {
          const title = item.node.frontmatter.title
          const slug = item.node.frontmatter.slug
          const date = item.node.frontmatter.date
          const image = item.node.frontmatter.image

          return (
            <Link className={blogStyles.blog} to={slug}>
              <img src={image} alt="" />
              <p>{date}</p>
              <h2>{title}</h2>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            date(fromNow: true)
            image
          }
        }
      }
    }
  }
`

export default Blog
