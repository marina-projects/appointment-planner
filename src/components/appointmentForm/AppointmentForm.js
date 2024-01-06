import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
import { DatePickerForm } from "../datePicker/DatePicker";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

export const AppointmentForm = ({
  contacts,
  nameApp,
  setNameApp,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  chosenContact,
  setChosenContact
}) => {
  const contactPick = (e) => {
    setNameApp(e.target.value);
    setChosenContact(contacts.find(contact => contact.name === e.target.value));
  }

  const handleDateChange = (newDate) => {
    if (newDate) {
      const formattedDate = new Intl.DateTimeFormat('en-US').format(newDate);
      setDate(formattedDate);
    } else {
      setDate(null);
    }
  };

  
  const handleTimeChange = (newTime) => {
    setTime(newTime.format('HH:mm'));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContactPicker contacts={contacts} onChange={contactPick}/>
        <DatePicker 
          label="Choose date"
          sx={{ width: 450 }}
          size={'small'}
          defaultValue={date || null}
          disablePast={true}
          value={date || null}
          onChange={handleDateChange}
        />
        <TimePicker 
          label="Choose time"
          sx={{ width: 450 }}
          size={'small'}
          ampm={false}
          ampmInClock={false}
          value={time || null}
          onChange={handleTimeChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
