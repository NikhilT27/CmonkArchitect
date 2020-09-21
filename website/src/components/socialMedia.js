import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import YouTubeIcon from "@material-ui/icons/YouTube"
import { Typography, IconButton, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
  socialMedia: { position: "fixed", bottom: "30%", right: "10px" },
}))

export default function SocialMedia() {
  const classes = useStyles()

  return (
    <div className={classes.root} className={classes.socialMedia}>
      <Grid container direction="column" alignItems="flex-end">
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
      </Grid>
    </div>
  )
}
