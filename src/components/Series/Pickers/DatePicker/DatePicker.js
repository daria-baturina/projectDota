import TextField from '@mui/material/TextField';
import {useEffect, useState} from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ruLocale from 'date-fns/locale/ru';
import {useDispatch} from "react-redux";
import {putDateState} from "../../../../store/dateState";

const DatePickerSeries = () => {
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();

  const updateTeamState = () => {
    const realDate = date === null ? null : Date.parse(date);
    dispatch(putDateState(realDate))
  };

  useEffect(()=> {
    updateTeamState();
  }, [date]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <DatePicker
        disableFuture
        mask='__.__.____'
        label="Series Date"
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