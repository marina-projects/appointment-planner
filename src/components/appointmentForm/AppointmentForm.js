import React, {useState} from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
import { DateCalendar } from "@mui/x-date-pickers";
import Button from '@mui/material/Button';
import '../appointmentForm/appointmentForm.css';
import { ColorToggleButton } from "../timePicker/timePicker";

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
  // const handleDateChange = (newDate) => {
  //   if (newDate) {
  //     const formattedDate = new Intl.DateTimeFormat('en-US').format(newDate);
  //     setDate(formattedDate);
  //   } else {
  //     setDate(null);
  //   }
  // };

  // const handleTimeChange = (newTime) => {
  //   setTime(newTime.format('HH:mm'));
  // };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  }

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep -1);
  }

  const renderStep = () => {
    switch(activeStep) {
      case 1:
        return (
          <div className="div-column step-form">
            <ul>
              <li className="active-li">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
            
            <ContactPicker contacts={contacts} onChange={contactPick}/>
            <div className="button-area div-row">
              <Button onClick={handleNext} className="accent-button">Next</Button>
            </div> 
          </div>
        );
      case 2: 
        return (
          <div className="div-column step-form">
            <ul>
              <li>1</li>
              <li className="active-li">2</li>
              <li>3</li>
              <li>4</li>
            </ul>
            <DateCalendar 
              label="Choose date"
              sx={{ width: 450 }}
              size={'small'}
              defaultValue={date || null}
              disablePast={true}
              value={date || null}
              className="calendar-picker"
            />

            <div className="button-area div-row">
              <Button onClick={handlePrev} className="button-back">Back</Button>
              <Button onClick={handleNext} className="accent-button">Next</Button>
            </div>
          </div>
          );
      case 3:
        return (
          <div className="div-column step-form">
            <ul>
              <li>1</li>
              <li>2</li>
              <li className="active-li">3</li>
              <li>4</li>
            </ul>
            <div class="custom-time-picker div-row">
              <ColorToggleButton time={time} setTime={setTime} handleTimeChange={handleTimeChange} />
            </div>
            <div className="button-area div-row">
              <Button onClick={handlePrev} className="button-back">Back</Button>
              <Button onClick={handleNext} className="accent-button">Next</Button>
            </div>
            
          </div>
        );
        case 4:
        return (
          <div className="div-column step-form">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li className="active-li">4</li>
            </ul>
            <div className="div-column contact-confirm">
              <p className="name-space"><span>Name:</span> {nameApp}</p>
              <p className="name-space"><span>Date:</span> {date}</p>
              <p className="name-space"><span>Time:</span> {time}</p>
            </div>
            <div className="button-area div-row">
              <Button onClick={handlePrev} className="button-back">Back</Button>
              <button type='submit' className="accent-button">Confirm</button>
            </div>
          </div>
        )
        default:
        return null;
    }
  }

  return (
    <div className="div-column chanegable-form">
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
};
