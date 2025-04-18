import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type DatePickerProps = {
  onDateChange: (date: string | null) => void;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date ? date.toISOString() : null);
  };

  const selectToday = () => {
    const today = new Date();
    setSelectedDate(today);
    onDateChange(today.toISOString());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <DatePicker
          value={selectedDate}
          onChange={handleChange}
          slotProps={{ textField: { fullWidth: true } }} // renderInput -> slotProps に変更
        />
        <Button onClick={selectToday} variant="contained" color="primary" style={{ marginTop: '8px' }}>
          今日を選択
        </Button>
      </div>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
