import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  appButton: {
    color: "black",
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar style={{ backgroundColor: "transparent" }}>
          <Typography variant="h6" className={classes.title}>
            Cmonk Architect
          </Typography>
          <Button color="inherit" className={classes.appButton}>
            Projects
          </Button>
          <Button color="inherit" className={classes.appButton}>
            Services
          </Button>
          <Button color="inherit" className={classes.appButton}>
            Philosophy
          </Button>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
