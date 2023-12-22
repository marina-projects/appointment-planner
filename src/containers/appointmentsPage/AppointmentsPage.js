import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { AppointmentList } from "../../components/appointmentList/appointmentList";

export const AppointmentsPage = ( {contacts, appointments, addAppointment} ) => {

  const [nameApp, setNameApp] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [chosenContact, setChosenContact] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(nameApp, date, time, chosenContact);
    setDate('');
    setTime('');
    setNameApp('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          nameApp={nameApp}
          setNameApp={setNameApp}
          handleSubmit={handleSubmit}
          contacts={contacts}
          chosenContact={chosenContact}
          setChosenContact={setChosenContact}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <AppointmentList appointments={appointments} />
      </section>
    </div>
  );
};