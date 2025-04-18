import React from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

type DropdownMenuProps = {
  options: string[];
  onSelect: (option: string | string[]) => void;
  multiple?: boolean;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect, multiple = false }) => {
  const handleChange = (e: SelectChangeEvent<string | string[]>) => {
    if (multiple) {
      onSelect(e.target.value as string[]);
    } else {
      onSelect(e.target.value as string);
    }
  };

  return (
    <Select
      onChange={handleChange}
      multiple={multiple}
      defaultValue={multiple ? [] : ''}
      fullWidth
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropdownMenu;
