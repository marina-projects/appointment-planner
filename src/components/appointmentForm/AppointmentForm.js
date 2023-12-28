import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
import { DatePickerForm } from "../DatePicker/DatePicker";
import { DatePicker } from "@mui/x-date-pickers";

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
    setDate(newDate.format('DD-MM-YYYY'));
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
        <input type="time" value={time} id="time" placeholder="Choose time" onChange={(e) => setTime(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
