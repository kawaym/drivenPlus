import { ThemeProvider } from "styled-components";

function Thematizer({ children }) {
  const theme = {
    background: {
      main: "#0E0E13",
    },
    button: {
      main: "#FF4791",
      secondary: "#CECECE",
      cancel: "#FF4747",
    },
    font: {
      main: "#000000",
      placeholder: "#7E7E7E",
      typography: "Roboto",
    },
    misc: {
      white: "#FFFFFF",
    },
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Thematizer;
