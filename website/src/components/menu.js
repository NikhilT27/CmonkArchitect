import React from "react"
import clsx from "clsx"
import { Typography, Grid, Box, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"

import KeyboardIcon from "@material-ui/icons/Keyboard"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import MenuIcon from "@material-ui/icons/Menu"

import Fab from "@material-ui/core/Fab"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: { outline: "none" },
  list: {
    width: "500px",
  },
  fullList: {
    width: "auto",
  },
}))

const Menu = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ height: "50px" }}>
        <Typography>Cmonk</Typography>
      </div>
      <List>
        <Link to="/#Skills" style={{ textDecoration: "none" }}>
          <ListItem button key="Skills">
            <ListItemIcon>
              <KeyboardIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#000" }}>
                  Skills
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <Link to="/#Projects" style={{ textDecoration: "none" }}>
          <ListItem button key="Projects">
            <ListItemIcon>
              <KeyboardIcon />
            </ListItemIcon>

            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#000" }}>
                  Projects
                </Typography>
              }
            />
          </ListItem>
        </Link>
      </List>
    </div>
  )
  return (
    <>
      <div className={classes.root}>
        <React.Fragment key="right">
          <IconButton onClick={toggleDrawer("right", true)}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>

          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  )
}

export default Menu
