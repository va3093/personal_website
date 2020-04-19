import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const DARK_NAVY = "#0B0C10";
export const OFF_WHITE = "#F1F1F1";

export const CONTENT_FONT = "montserrat";

export const CONTENT_FONT_SIZE_BODY1 = "14px";
export const CONTENT_FONT_SIZE_BODY2 = "14px";

export const CONTENT_FONT_WEIGHT_BODY1 = "500";
export const CONTENT_FONT_WEIGHT_BODY2 = "light";

export const CONTENT_LINE_HEIGHT_BODY1 = "28px";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "futura-pt",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#FF5468",
    },
    secondary: {
      main: "#FCA766",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "white",
      },
    },
  },
});

export default responsiveFontSizes(theme);
