import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Carousel } from "react-bootstrap"
import { Typography, IconButton, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
}))

export default function Introduction() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "pexels-pixabay-262347.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Carousel>
        <Carousel.Item>
          <div style={{ width: "window.innerWidth", height: "600px" }}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <Carousel.Caption>
            <h3>First slide sds</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: "window.innerWidth", height: "600px" }}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: "window.innerWidth", height: "600px" }}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
