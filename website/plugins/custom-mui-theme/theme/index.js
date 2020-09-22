import { createMuiTheme } from "@material-ui/core/styles"

const themeName = "Custom Cmonk Theme"

export default createMuiTheme({
  themeName,
  props: {
    MuiButtonBase: {
      // disableRipple: true,
      "&:focus": {
        outline: "none",
      },
    },
    MuiIconButton: {
      "&:focus": {
        outline: "none",
      },
    },
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
})
