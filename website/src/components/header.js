import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Menu from "./menu"
import { Box, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    background: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  appbar: {
    background: "transparent",
    boxShadow: "none",
  },
  appButton: {
    color: "white",
    paddingTop: theme.spacing(1.5),
    "&:focus": {
      outline: "none",
    },
  },
  buttonBox: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h6" className={classes.title}>
              Cmonk Architect
            </Typography>
            <Box className={classes.buttonBox}>
              <Button href="/page-2/" className={classes.appButton}>
                Projects
              </Button>
              <Button
                href="/page-2/"
                color="inherit"
                className={classes.appButton}
              >
                Services
              </Button>
              <Button
                href="/page-2/"
                color="inherit"
                className={classes.appButton}
              >
                Philosophy
              </Button>
            </Box>

            <Menu
              style={{
                "&:focus": {
                  outline: "none",
                },
              }}
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
