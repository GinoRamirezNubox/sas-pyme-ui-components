import React from 'react';

import {ThemeProvider} from 'theme-ui';
import nuboxTheme from './../src/theme/nubox-theme';

export const parameters = {
  layout: 'centered',
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={nuboxTheme}>
      <Story />
    </ThemeProvider>
  ),
];
