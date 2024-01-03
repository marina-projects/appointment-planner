import React, { useState } from 'react';
import { AppointmentCard } from '../appointmentCard/appointmentCard';

export const AppointmentList = ({ appointments }) => {
  

  return (
    <>
      {/* <button onClick={handleSort}>Sort by date</button> */}

      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.date}
          nameApp={appointment.nameApp}
          date={appointment.date}
          time={appointment.time}
          chosenContact={appointment.chosenContact}
        />
      ))}
    </>
  );
};
