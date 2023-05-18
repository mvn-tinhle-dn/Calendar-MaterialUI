import { createTheme } from "@mui/material";

const theming = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#3c4043",
    },
    borderGray: {
      main: "#d9dce0",
    },
    textPrimary: {
      main: "#3c4043",
    },
    whiteText: {
      main: "#fafdfe",
    },
    gray: {
      main: "#70757A",
    },
    icon: {
      main: "#5f6367",
    },
    live: {
      main: "#d1ebfe",
    },
    liveDark: {
      main: "#19acf8",
    },
    white: {
      main: "#fff",
    },
    today: {
      main: "#1565c0",
    },
  },
  typography: {
    body1: {
      lineHeight: 1,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { styles: "svm" },
          style: {
            padding: "6px 0",
          },
        },
      ],
    },
  },
});

export { theming };
