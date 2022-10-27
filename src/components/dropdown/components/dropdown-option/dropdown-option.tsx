import React, {useContext} from 'react';
import {Flex} from 'theme-ui';
import {DropdownContext} from '../../dropdown.context';
import {DropdownOptionProps} from './dropdown-option.types';

const DropdownOption = ({name, onClick}: DropdownOptionProps) => {
  const {setIsOpen} = useContext(DropdownContext);

  const handleDropdownOptionClick = () => {
    onClick && onClick();
    setIsOpen(false);
  };

  return (
    <Flex
      onClick={handleDropdownOptionClick}
      sx={{
        alignItems: 'center',
        px: 3,
        height: '46px',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        fontWeight: 400,
        fontSize: 1,
        fontFamily: 'body',
        '&:hover': {
          backgroundColor: 'rgba(60, 77, 118, 0.12)',
          color: 'primary',
        },
        '&:last-child': {
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        },
        '&:first-of-type': {
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        },
      }}
    >
      {name}
    </Flex>
  );
};

export default DropdownOption;
