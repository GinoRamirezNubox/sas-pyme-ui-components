import {createContext} from 'react';
import {DropdownContextProps} from './dropdown.types';

export const DropdownContext = createContext<DropdownContextProps>(
  {} as DropdownContextProps
);

export const {Provider: DropdownProvider} = DropdownContext;
