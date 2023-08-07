import {FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { FC } from 'react';

export interface IOption {
  value: number | string;
  name: string;
}

interface SelectCustomProps {
  label: string | number;
  options: IOption[];
  value: string | number;
  handlerSelect: (value: string | number) => void;
}

const SelectCustom: FC<SelectCustomProps> = ({
  label,
  options,
  value,
  handlerSelect,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={(e) => handlerSelect(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.name} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCustom;
