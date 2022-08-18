import '@mui/material/styles';

// Custom theme colors (this is just an example)
interface CustomColors {
  primaryBlue: string;
  skyBlue: string;
  lightBlue: string;
  darkGray: string;
  gray: string;
  tritaryGray: string;
  placeholderGray: string;
  purple: string;
  alertRed: string;
  successGreen: string;
  warningYellow: string;
}

/**
 * Extending the main Theme interface using TS module augmentation
 * @see: https://mui.com/material-ui/customization/how-to-customize/
 */
declare module '@mui/material/styles' {
  interface Theme {
    colors: CustomColors;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: CustomColors;
  }
}
