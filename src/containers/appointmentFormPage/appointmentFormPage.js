import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import iconLine from '../../images/icon-line.svg'


export const AppointmentFormPage = ( {contacts, appointments, addAppointment} ) => {

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
        <section className="form-section">
          <ul>
                <li><NavLink to="/form">1</NavLink></li>
                <li><img src={iconLine} alt="" /></li>
                <li><NavLink to="/add-appointment">2</NavLink></li>
            </ul>
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
      </div>
    );
  };