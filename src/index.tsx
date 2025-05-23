import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter} from 'react-router-dom';
import App from "./App";
import {ThemeProvider} from "@mui/material";
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
);
