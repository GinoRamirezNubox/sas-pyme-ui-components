import {Theme} from 'theme-ui';

const nuboxTheme: Theme = {
  fonts: {
    heading: '"Jost",Helvetica,Arial,serif;',
    display: '"Jost",Helvetica,Arial,serif;',
    body: '"Jost",Helvetica,Arial,serif;',
  },
  colors: {
    text: '#858585',
    background: '#fff',
    primary: '#3C4D76',
    secondary: '#82868B',
    muted: '#f6f6f6',
    link: '#3182f9',
    white: '#fff',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    card: '0px 4px 24px rgba(0, 0, 0, 0.06)',
    button: 'rgb(60 77 118 / 65%) 0px 8px 25px -8px',
  },
  radii: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  breakpoints: [
    '@media only screen and (min-width: 320px)',
    '@media only screen and (min-width: 768px)',
    '@media only screen and (min-width: 1224px)',
    '@media only screen and (min-width: 1824px)',
  ],
  fontWeights: {
    heading: 500,
    display: 400,
    body: 400,
  },
};

export default nuboxTheme;
