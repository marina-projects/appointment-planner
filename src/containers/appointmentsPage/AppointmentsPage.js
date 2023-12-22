import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ( {contacts, appointments, addAppointment} ) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
    alert(`Contact: ${name}, date: ${date}, time: ${time}`)
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title}
          setTitle={setTitle}
          contact={setContact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          name={name}
          setName={setName}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments} />
      </section>
    </div>
  );
};