// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ThemeContext = createContext();

export function ThemeProviderCustom({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: { main: '#1976d2' },
        background: {
          default: darkMode ? '#242424' : '#dbdbdb',
          paper:   darkMode ? '#1d1d1d' : '#dbdbdb'
        },
        text: {
          primary:   darkMode ? '#e0e0e0' : '#000000',
          secondary: darkMode ? '#b0b0b0' : '#555555'
        }
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: darkMode ? '#333333' : '#1976d2'
            }
          }
        }
      }
    })
  , [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
