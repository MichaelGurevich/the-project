// theme.ts

// Shared tokens
export const spacing = (factor: number) => factor * 8;

export const typography = {
  fontFamily: 'SF Pro, sans-serif',
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    '2xl': 32,
  },
  fontWeight: {
    regular: '400' as '400',
    medium: '500' as '500',
    bold: '700' as '700',
  },
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  pill: 50,
};

export const elevation = {
  none: 'none',
  sm: '0px 1px 3px rgba(0,0,0,0.1)',
  md: '0px 3px 6px rgba(0,0,0,0.15)',
  lg: '0px 10px 20px rgba(0,0,0,0.2)',
};

// Color palettes
const lightPalette = {
  primary: {
    50: '#e0f7f6',
    100: '#b3ecec',
    200: '#81dfdc',
    300: '#53d3cc',
    400: '#40c5c5',
    500: '#40e0d0',
    600: '#3ebfad',
    700: '#38a58f',
    800: '#327770',
    900: '#2b5951',
  },
  secondary: {
    50: '#fff0f8',
    100: '#ffd6e8',
    200: '#ffa6c9',
    300: '#ff76aa',
    400: '#ff4c8d',
    500: '#ff4081',
    600: '#e63b76',
    700: '#b3315d',
    800: '#812347',
    900: '#4d112f',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  error: {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
  },
  warning: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
  },
  info: {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
  },
  success: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
  },
  text: {
    primary: '#000000',
    secondary: '#666666',
    inverted: '#ffffff',
  },
};

const darkPalette = {
  ...lightPalette,
  neutral: {
    50: '#212121',
    100: '#424242',
    200: '#616161',
    300: '#757575',
    400: '#9e9e9e',
    500: '#bdbdbd',
    600: '#e0e0e0',
    700: '#eeeeee',
    800: '#f5f5f5',
    900: '#fafafa',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#ffffff',
    secondary: '#bbbbbb',
    inverted: '#000000',
  },
};

// Final theme exports
export const lightTheme = {
  palette: lightPalette,
  spacing,
  typography,
  borderRadius,
  elevation,
  mode: 'light' as const,
};

export const darkTheme = {
  palette: darkPalette,
  spacing,
  typography,
  borderRadius,
  elevation,
  mode: 'dark' as const,
};
