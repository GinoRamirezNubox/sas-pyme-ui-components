import React from "react";
import { Box } from "theme-ui";
import DropdownButton from "./components/dropdown-button/dropdown-button";
import DropdownMenu from "./components/dropdown-menu/dropdown-menu";
import DropdownOption from "./components/dropdown-option/dropdown-option";
import { DropdownProvider } from "./dropdown.context";
import { DropdownHOCProps } from "./dropdown.types";

const DropdownHOC: React.FC<DropdownHOCProps> = ({
  children,
  sx,
  dropdownId,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // @ts-ignore
      if (
        !document.getElementById(dropdownId)?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [dropdownId]);

  return (
    <Box sx={{ position: "relative", ...sx }} id={dropdownId}>
      <DropdownProvider
        value={{
          isOpen,
          setIsOpen,
        }}
      >
        {children}
      </DropdownProvider>
    </Box>
  );
};

const Dropdown = Object.assign(DropdownHOC, {
  Button: DropdownButton,
  Menu: DropdownMenu,
  Option: DropdownOption,
});

export default Dropdown;
