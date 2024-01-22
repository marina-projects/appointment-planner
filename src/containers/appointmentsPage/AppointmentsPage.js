import React from "react";
import '../appointmentsPage/appointmentPage.css'
import { AppointmentList } from "../../components/appointmentList/appointmentList";
import { NavLink } from "react-router-dom";

export const AppointmentsPage = ( {contacts, appointments, addAppointment} ) => {
  
  return (
    <div className="main-form-section div-row">
        <div className="info-form-section div-column">
          <h3>Appointments</h3>
          <p className="white-font">Here is your appointments list. You can manage it and add new contact.</p>          
          <NavLink to="/add-appointment" className="add-new">Add new appointment</NavLink>
        </div>
        <div className="form-section div-column">
          <h2 className="headline-mobile">Appointments</h2>
          <div className="contacts div-column">
            {
              !appointments || appointments.length === 0 ? <p>There is no appointments yet</p> :<AppointmentList appointments={appointments} />
            }
          </div>
        </div>
    </div> 
  )
 
};