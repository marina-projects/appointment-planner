import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';


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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContactPicker contacts={contacts} onChange={contactPick}/>
        <input type="date" value={date} id="date" placeholder="Choose date" onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} id="time" placeholder="Choose time" onChange={(e) => setTime(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
