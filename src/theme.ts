// src/theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Nanum Myeongjo, serif',
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.15rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.95rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1rem', // 12px
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '0.9rem', // 약 11px
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontSize: '0.95rem',
      fontWeight: 500,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: '#2E3B2C',
      paper: '#1F271C',
    },
    text: {
      primary: '#F5F5DC',
      secondary: '#D4AF37',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
