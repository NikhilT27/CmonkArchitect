import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Typography, Grid, Paper, Link, Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "100px",
    paddingBottom: "100px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  image: {
    width: "400px",
  },
}))

export default function About() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allStrapiAbouts {
        nodes {
          information
          about_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className={classes.root}>
      {data.allStrapiAbouts.nodes.map(item => {
        return (
          <Box>
            <Grid container justify="space-around" alignItems="center">
              <Grid item>
                <div style={{ width: "300px" }}>
                  <Typography>{item.information}</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.image}>
                  <Img fluid={item.about_image.childImageSharp.fluid} />
                </div>
              </Grid>
            </Grid>
          </Box>
        )
      })}
    </div>
  )
}
