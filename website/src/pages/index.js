import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Introduction from "../components/Introduction"
import SocialMedia from "../components/socialMedia"

import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import "bootstrap/dist/css/bootstrap.min.css"
const useStyles = makeStyles(theme => ({
  root: {},
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Introduction />
      </Layout>
      <SocialMedia />
    </>
  )
}

export default IndexPage
