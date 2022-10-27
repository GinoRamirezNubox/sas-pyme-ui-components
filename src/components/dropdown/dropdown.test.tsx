import React from 'react';
import Dropdown from './dropdown';
import {FiChevronDown} from 'react-icons/fi';
import {fireEvent, render, screen} from '@testing-library/react';
import {Container, ThemeProvider} from 'theme-ui';
import nuboxTheme from '../../theme/nubox-theme';

const renderDropdown = (
  options: {
    name: string;
    onClick: () => void;
  }[],
  dropdownName: string,
  dropdownId: string
) => {
  return render(
    <ThemeProvider theme={nuboxTheme}>
      <Container data-testid={'container-outside'}>
        <Dropdown dropdownId="dropdown-test-example">
          <Dropdown.Button name="Acción" icon={<FiChevronDown />} />
          <Dropdown.Menu>
            {options.map((option, index) => (
              <Dropdown.Option
                key={`dropdown-options-${index}`}
                name={option.name}
                onClick={option.onClick}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </ThemeProvider>
  );
};

describe('Dropdown', () => {
  const options = [
    {
      name: 'Todas las páginas',
      onClick: jest.fn(),
    },
    {
      name: 'Página actual',
      onClick: jest.fn(),
    },
  ];
  test('debe renderizar el componente', () => {
    renderDropdown(options, 'Acción', 'dropdown-test-example');

    expect(screen.getByText('Acción')).toBeInTheDocument();
    expect(screen.queryByText('Todas las páginas')).not.toBeInTheDocument();
    expect(screen.queryByText('Página actual')).not.toBeInTheDocument();
  });

  test('debe mostrar opciones cuando se haga click en el botón', () => {
    renderDropdown(options, 'Acción', 'dropdown-test-example');
    const button = screen.getByText('Acción');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(screen.queryByText('Todas las páginas')).toBeInTheDocument();
    expect(screen.queryByText('Página actual')).toBeInTheDocument();
  });

  test('debe ocultar opciones cuando se llame click fuera del botón', () => {
    renderDropdown(options, 'Acción', 'dropdown-test-example');
    const containerOutside = screen.getByTestId('container-outside');
    expect(containerOutside).toBeInTheDocument();
    fireEvent.click(containerOutside);

    expect(screen.queryByText('Todas las páginas')).not.toBeInTheDocument();
    expect(screen.queryByText('Página actual')).not.toBeInTheDocument();
  });

  describe('Dropdown.Option', () => {
    test('debe llamar a acción cuando se llame click en el botón de opción', () => {
      renderDropdown(options, 'Acción', 'dropdown-test-example');
      const button = screen.getByText('Acción');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      const allPagesOption = screen.getByText('Todas las páginas');
      expect(allPagesOption).toBeInTheDocument();
      fireEvent.click(allPagesOption);

      expect(options[0].onClick).toHaveBeenCalled();
    });
  });
});
