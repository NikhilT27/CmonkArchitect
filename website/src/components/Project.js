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

export default function Project() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allStrapiProjects {
        nodes {
          name
          date
          company_client
          data {
            id
            point
          }
          feature
          type
          image {
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
      <Typography variant="h3">Projects</Typography>
      {data.allStrapiProjects.nodes.map(item => {
        if (item.feature === true) {
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
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="h5">{item.date}</Typography>
                    <Typography variant="h5">{item.company_client}</Typography>
                    <Typography variant="h5">{item.type}</Typography>
                    <Typography>{item.information}</Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.image}>
                    <Img fluid={item.image.childImageSharp.fluid} />
                  </div>
                </Grid>
              </Grid>
            </Box>
          )
        }
      })}
    </div>
  )
}
