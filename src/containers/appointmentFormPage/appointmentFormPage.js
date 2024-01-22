import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { Person, CalendarCheck, Clock } from 'react-bootstrap-icons';

export const AppointmentFormPage = ( {contacts, appointments, addAppointment} ) => {

    const [nameApp, setNameApp] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [chosenContact, setChosenContact] = useState({});

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      addAppointment(nameApp, date, time, chosenContact);
      setDate('');
      setTime('');
      setNameApp('');
      navigate('/appointments');
    };

    return (
      <div className="main-form-section div-row">
        <div className="info-form-section div-column">
          <h3>Add an Appointment</h3>
          <div className="form-places name-place div-row">
              <Person />
              <p>{nameApp}</p>
          </div>
          <div className="form-places phone-place div-row">
              <CalendarCheck />
              <p>{date}</p>
          </div>
          <div className="form-places email-place div-row">
              <Clock />
              <p>{time}</p>
          </div>
        </div>
        <div className="form-section div-column">
            <h2 className="headline-mobile">Add an Appointment</h2>
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
        </div>
        <hr />
      </div>
    );
  
  };