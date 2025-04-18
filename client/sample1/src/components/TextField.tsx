import React from 'react';
import TextField from '@mui/material/TextField';

type TextFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  trackInteraction?: (event: Event, metadata?: any) => void; // 追加
};

const TextFieldComponent: React.FC<TextFieldProps> = ({ value, onChange, placeholder, trackInteraction }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (trackInteraction) {
      trackInteraction(new Event('input-change'), { value: e.target.value });
    }
    onChange(e.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      fullWidth
    />
  );
};

export default TextFieldComponent;
