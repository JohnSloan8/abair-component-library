import { blue, green, red } from "@mui/material/colors";
import { ThemeOptions } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { Themes } from "./types";

const sharedTheme = {
  palette: {
    warning: {
      wafer: red[50],
      light: red[100],
      main: red[600],
      dark: red[800],
    },
    info: {
      main: "#fff",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: "80%",
        },
      },
    },
  },
} as ThemeOptions; // the reason for this casting is deepmerge return type

const themes: Record<Themes, ThemeOptions> = {
  abair: deepmerge(sharedTheme, {
    palette: {
      mode: "abair",
      background: {
        default: "#fafafa",
        paper: "#fff",
      },
      primary: {
        wafer: green[50],
        light: green[100],
        main: green[600],
        dark: green[800],
      },
      secondary: {
        wafer: blue[50],
        light: blue[100],
        main: blue[600],
        dark: blue[800],
      },
    },
  }),

  scéalaí: deepmerge(sharedTheme, {
    palette: {
      mode: "scéalaí",
      background: {
        default: "#aaa",
        paper: "#ddd",
      },
      primary: {
        wafer: green[100],
        light: green[200],
        main: green[700],
        dark: green[900],
      },
      secondary: {
        wafer: blue[100],
        light: blue[200],
        main: blue[700],
        dark: blue[900],
      },
    },
  }),
};

export default themes;
