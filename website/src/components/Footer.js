import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Typography, Grid, Paper, Link, Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: { background: "black" },
  image: {
    width: "300px",
  },
}))

export default function Footer() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      strapiContacts {
        number
        email
        address
      }
    }
  `)
  return (
    <div className={classes.root}>
      <Box style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <div>
              <Typography variant="h4">{data.strapiContacts.number}</Typography>
              <Typography variant="h5">{data.strapiContacts.email}</Typography>
              <Typography variant="h5">
                {data.strapiContacts.address}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
