import { ThemeProvider } from 'styled-components';
import { theme } from './global/theme';
import { GlobalStyle } from './global/globalStyle';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
