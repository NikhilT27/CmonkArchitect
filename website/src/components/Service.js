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
    width: "300px",
  },
}))

export default function Service() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allStrapiServices {
        nodes {
          title
          information
          service_image {
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
      <Typography variant="h3">Services</Typography>
      {data.allStrapiServices.nodes.map(item => {
        return (
          <Box style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <div style={{ width: "300px" }}>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography>{item.information}</Typography>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.image}>
                  <Img fluid={item.service_image.childImageSharp.fluid} />
                </div>
              </Grid>
            </Grid>
          </Box>
        )
      })}
    </div>
  )
}
