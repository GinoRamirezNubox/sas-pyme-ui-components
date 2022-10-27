import React from 'react';
import {render, screen} from './../../jest.utils';
import Dropdown from './dropdown';
import {FiChevronDown} from 'react-icons/fi';
import {fireEvent} from '@testing-library/react';
import {Container} from 'theme-ui';

describe('Dropdown', () => {
  test('debe renderizar el componente', () => {
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

    render(
      <Dropdown dropdownId="dropdown-test-example">
        <Dropdown.Button name="Accion" icon={<FiChevronDown />} />
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
    );

    expect(screen.getByText('Accion')).toBeInTheDocument();
    expect(screen.queryByText('Todas las páginas')).not.toBeInTheDocument();
    expect(screen.queryByText('Página actual')).not.toBeInTheDocument();
  });

  test('debe mostrar opciones cuando se gatille click en el boton', () => {
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

    render(
      <Dropdown dropdownId="dropdown-test-example">
        <Dropdown.Button name="Accion" icon={<FiChevronDown />} />
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
    );
    const button = screen.getByText('Accion');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(screen.queryByText('Todas las páginas')).toBeInTheDocument();
    expect(screen.queryByText('Página actual')).toBeInTheDocument();
  });

  test('debe ocultar opciones cuando se gatille click fuera del boton', () => {
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

    render(
      <Container data-testid={'container-outside'}>
        <Dropdown dropdownId="dropdown-test-example">
          <Dropdown.Button name="Accion" icon={<FiChevronDown />} />
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
    );
    const containerOutside = screen.getByTestId('container-outside');
    expect(containerOutside).toBeInTheDocument();
    fireEvent.click(containerOutside);

    expect(screen.queryByText('Todas las páginas')).not.toBeInTheDocument();
    expect(screen.queryByText('Página actual')).not.toBeInTheDocument();
  });

  describe('Dropdown.Option', () => {
    test('debe llamar a accion cuando se gatille click en el boton de opcion', () => {
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

      render(
        <Dropdown dropdownId="dropdown-test-example">
          <Dropdown.Button name="Accion" icon={<FiChevronDown />} />
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
      );
      const button = screen.getByText('Accion');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      const allPagesOption = screen.getByText('Todas las páginas');
      expect(allPagesOption).toBeInTheDocument();
      fireEvent.click(allPagesOption);

      expect(options[0].onClick).toHaveBeenCalled();
    });
  });
});
