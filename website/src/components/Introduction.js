import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Carousel } from "react-bootstrap"
import { Typography, IconButton, Grid, Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
  carouselImage: {
    width: "window.innerWidth",
    height: "window.innerHeight",
    maxHeight: "650px",
  },
  carouselText: {
    position: "absolute",
    right: "10%",
    bottom: theme.spacing(15),
    width: "300px",
    textAlign: "left",
    color: "#fff",
  },
}))

export default function Introduction() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      Image1: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 768, maxWidth: 1368) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allStrapiIntroductions {
        nodes {
          moto
          sliding_photo {
            childImageSharp {
              fluid(quality: 100, maxHeight: 768, maxWidth: 1368) {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Carousel
        controls={false}
        indicators={false}
        pause={false}
        interval={4000}
      >
        {data.allStrapiIntroductions.nodes.map(item => {
          return (
            <Carousel.Item>
              <div className={classes.carouselImage}>
                <Img fluid={item.sliding_photo.childImageSharp.fluid} />
              </div>
              <Paper elevation={1}>
                <Grid container justify="flex-end" alignItems="center">
                  <Typography className={classes.carouselText}>
                    {item.moto}
                  </Typography>
                </Grid>
              </Paper>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
