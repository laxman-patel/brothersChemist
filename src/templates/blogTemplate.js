import React from "react"
import { graphql } from "gatsby"
import blogTemplateStyles from "./blogtemplate.module.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className={blogTemplateStyles.container}>
      <div className={blogTemplateStyles.blogPost}>
        <img src={frontmatter.image} alt="" />
        <p className={blogTemplateStyles.date}>{frontmatter.date}</p>
        <h1>{frontmatter.title}</h1>

        <div
          className={blogTemplateStyles.blogPostContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(fromNow: true)
        slug
        title
        image
      }
    }
  }
`
