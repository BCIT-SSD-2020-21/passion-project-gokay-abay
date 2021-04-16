import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#92C9B1",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#92C9B1" }}>
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Typography>Gökay Abay &copy; 2021</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Footer
