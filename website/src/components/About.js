import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import { Typography, Grid, Paper, Link } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    height: "600px",
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Typography>About</Typography>
      </Grid>
    </div>
  )
}
