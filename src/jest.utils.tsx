import React, {ReactElement} from 'react';
import {render as rtlRender, RenderResult} from '@testing-library/react';

import {ThemeProvider} from 'theme-ui';
import nuboxTheme from './theme/nubox-theme';

export const render = (
  ui: ReactElement,
  {...renderOptions}: any = {}
): RenderResult => {
  // @ts-ignore
  const Wrapper = ({children}) => (
    <ThemeProvider theme={nuboxTheme}>{children}</ThemeProvider>
  );

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

export * from '@testing-library/react';
