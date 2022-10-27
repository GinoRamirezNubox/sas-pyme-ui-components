import React, {useContext} from 'react';
import {Box, Button} from 'theme-ui';
import {DropdownContext} from '../../dropdown.context';
import {DropdownButtonProps} from './dropdown-button.types';

const DropdownButton = ({name, icon}: DropdownButtonProps) => {
  const {setIsOpen, isOpen} = useContext(DropdownContext);

  return (
    <Button
      sx={{
        backgroundColor: 'primary',
        color: '#fff',
        px: 3,
        py: 0,
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out',
        fontSize: 1,
        fontWeight: 500,
        borderRadius: 2,
        fontFamily: 'body',
        '&:hover': {
          boxShadow: 'button',
        },
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Box
        as="span"
        sx={{
          height: 'inherit',
          borderRight: '1px solid rgba(0, 0, 0, 0.08)',
          paddingRight: 3,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {name}
      </Box>
      {icon && (
        <Box
          as="span"
          sx={{
            height: 'inherit',
            paddingLeft: 3,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </Box>
      )}
    </Button>
  );
};

export default DropdownButton;
