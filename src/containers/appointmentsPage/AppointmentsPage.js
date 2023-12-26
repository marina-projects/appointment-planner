import React from "react";

import { AppointmentList } from "../../components/appointmentList/appointmentList";

export const AppointmentsPage = ( {contacts, appointments, addAppointment} ) => {

  return (
    <div>
      <section>
        <h2>Appointments</h2>
        <AppointmentList appointments={appointments} />
      </section>
    </div>
  );
};