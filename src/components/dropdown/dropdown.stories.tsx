import React from 'react';
import {Story, Meta} from '@storybook/react';
import Dropdown from './dropdown';
import {DropdownHOCProps} from './dropdown.types';
import {FiChevronDown} from 'react-icons/fi';
import {Flex} from 'theme-ui';

const Template: Story<DropdownHOCProps> = (args) => (
  <Flex sx={{gap: 3}}>
    <Dropdown {...args}>{args.children}</Dropdown>
  </Flex>
);
export const Default = Template.bind({});

Default.args = {
  dropdownId: 'dropdown-1',
  children: (
    <>
      <Dropdown.Button name="Dropdown de opciones" icon={<FiChevronDown />} />
      <Dropdown.Menu>
        <Dropdown.Option
          name="Opción numero uno"
          onClick={() => alert('Opción numero uno')}
        />
        <Dropdown.Option
          name="Opción numero dos"
          onClick={() => alert('Opción numero dos')}
        />
      </Dropdown.Menu>
    </>
  ),
};

export default {
  component: Dropdown,
  title: 'Dropdown',
} as Meta;
