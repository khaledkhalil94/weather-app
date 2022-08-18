import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './types';
import defaultTheme from './defaultTheme';

const styleTheme = createTheme(defaultTheme);

export default function MainTheme(props: {children: React.ReactNode}) {
  const {children} = props;

  return (
    <ThemeProvider theme={styleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
