import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContactPicker contacts={contacts} onChange={(e) => setName(e.target.value)}/>
        <input id="name" type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        <input type="date" value={date} id="date" placeholder="Choose date" onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} id="time" placeholder="Choose time" onChange={(e) => setTime(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
