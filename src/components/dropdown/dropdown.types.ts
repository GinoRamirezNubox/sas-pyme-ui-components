import React from 'react';
import {ThemeUIStyleObject} from 'theme-ui';

export interface DropdownHOCProps {
  children: React.ReactNode;
  sx?: ThemeUIStyleObject;
  dropdownId?: string;
}

export interface DropdownContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
