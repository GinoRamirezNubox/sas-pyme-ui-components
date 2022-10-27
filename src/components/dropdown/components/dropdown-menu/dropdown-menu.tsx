import React, {useContext} from 'react';
import {Flex} from 'theme-ui';
import {DropdownContext} from '../../dropdown.context';
import {DropdownMenuProps} from './dropdown-menu.types';

const DropdownMenu = ({children, sx}: DropdownMenuProps) => {
  const {isOpen} = useContext(DropdownContext);

  return (
    <>
      {isOpen && (
        <Flex
          sx={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            minWidth: '100%',
            backgroundColor: '#fff',
            boxShadow: 'card',
            borderRadius: 2,
            flexDirection: 'column',
            ...sx,
          }}
        >
          {children}
        </Flex>
      )}
    </>
  );
};

export default DropdownMenu;
