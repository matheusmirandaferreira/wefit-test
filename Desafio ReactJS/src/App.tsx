import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
import { GlobalStyle } from "./global/globalStyle";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { MoviesProvider } from "./hooks/movies";

export function App() {
  const muiTheme = createTheme({
    palette: {
      info: {
        main: theme.primary,
        "700": theme.primary,
      },
    },
  });

  return (
    <BrowserRouter>
      <MUIThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <MoviesProvider>
            <Header />
            <Routes />
          </MoviesProvider>
          <GlobalStyle />
        </ThemeProvider>
      </MUIThemeProvider>
    </BrowserRouter>
  );
}
