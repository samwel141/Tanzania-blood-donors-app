/*
 * The Material-UI theme for the whole UI
 */
import { createTheme } from "@mui/material/styles";

/**
 * @constant
 * @type {object}
 * @name COLORS
 * @description other colors used in the UI
 * @see {@link https://colors.artyclick.com/color-name-finder/}  - to learn how
 *  color names are generated
 */
const COLORS = {
  lavenderPinocchio: "#A547477D", // used for some of the borders
  carbonGrey: "#8F2626", // used for adding contrast in texts
  black: "#000", // used as text color
  white: "#fff", // used as text color
};

export const colorPrimary = "#96121246";

const colorPrimarySelected = "#ED40409D";
const colorPrimaryHover = "#F26363C5";

export default createTheme({
  spacing: 4,
  typography: {
    fontSize: 11,
    //htmlFontSize		: 20,
    fontFamily: ["Lato", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: colorPrimary,
      lightMain: "#000000",
      light: "rgba(118, 187, 35, 0.1)",
      lightMed: "rgba(118, 187, 35, 0.4)",
      //very light primary color, for background sometimes
      lightVery: "#F9FCF4",
    },
    secondary: {
      main: "#61892f",
      dark: "rgba(135, 195, 46, .32)",
    },
    action: {
      active: "#ED40409D",
      hover: "#BF747472",
      selected: "#C54242C5",
    },
    stats: {
      green: colorPrimary,
      red: "rgba(233, 88, 57, 1)",
      orange: "rgba(239, 128, 49, 1)",
      lavenderPinocchio: COLORS.lavenderPinocchio,
      carbonGrey: COLORS.carbonGrey,
      black: COLORS.black,
      white: COLORS.white,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          fontSize: ".785rem",
        },
        label: {
          textTransform: "capitalize",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: colorPrimary,
            backgroundColor: colorPrimarySelected,
            "&:hover": {
              backgroundColor: colorPrimarySelected,
            },
          },
        },
        button: {
          "&:hover": {
            color: colorPrimary,
            backgroundColor: colorPrimaryHover,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            color: colorPrimary,
            backgroundColor: colorPrimaryHover,
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: `1px solid ${colorPrimarySelected}`,
          color: "rgba(0,0,0,0.3)",
          "&.Mui-selected": {
            color: colorPrimary,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&.MuiTableRow-hover": {
            "&:hover": {
              backgroundColor: colorPrimaryHover,
            },
            "&:hover .MuiTableCell-body": {
              color: colorPrimary,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: ".785rem",
          fontWeight: 700,
          color: "#494747",
        },
        body: {
          fontSize: ".785rem",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          "&:nth-child(1)": {
            width: 20,
          },
          "&:nth-child(2)": {
            width: 30,
          },
          "&:nth-child(3)": {
            width: 30,
          },
          "&:nth-child(4)": {
            width: 30,
          },
          "&:nth-child(5)": {
            width: 30,
          },
          "&:nth-child(6)": {
            width: 30,
          },
          "&:nth-child(7)": {
            width: 30,
          },
          "&:nth-child(8)": {
            width: 200,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(118, 187, 35, 0.6)",
          display: "flex",
          alignItems: "center",
          margin: "1.2rem 0",
        },
        standardError: {
          // this targets "error" variant of Alert
          backgroundColor: "rgb(252,209,209)",
          fontWeight: 600,
        },
        message: {
          padding: "0.5rem 0",
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: "outlined",
    },
    MuiTextField: {
      variant: "outlined",
    },
  },
});
