import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';

const theme = {
  colors: {
    primary: "#f3f3f3",
    textColor: "#222222",
    white: "#ffffff",
    header: "#ffffff",
  }
}

const Global = createGlobalStyle`
* {
	padding: 0px;
	margin: 0px;
	border: none;
  font-family: Manrope;
  background-color: ${theme.colors.primary};
}
*,
*::before,
*::after {
	box-sizing: border-box;
}
a, a:link, a:visited  {
    text-decoration: none;
}
a:hover  {
    text-decoration: none;
}
`

const AppWrapper = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Manrope']
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <AppWrapper />
)