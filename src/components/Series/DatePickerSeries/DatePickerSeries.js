import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {useState} from "react";
import {DatePicker} from "@mui/lab";

const DatePickerSeries = () => {
  const [date, setDate] = useState(null);

  return (
    <LocalizationProvider> dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePickerSeries;