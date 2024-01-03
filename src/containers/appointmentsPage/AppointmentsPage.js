import React from "react";
import '../appointmentsPage/appointmentPage.css'

import { AppointmentList } from "../../components/appointmentList/appointmentList";

export const AppointmentsPage = ( {contacts, appointments, addAppointment} ) => {

  return (
    <div>
      <section className="appointments div-column">
        <h2>Appointments</h2>
        <AppointmentList appointments={appointments} />
      </section>
    </div>
  );
};