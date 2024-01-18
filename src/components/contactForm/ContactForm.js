import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../contactForm/contactForm.css';
import "../../containers/formPage/formPage.css"

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="div-column step-form">
            <ul>
              <li className="active-li">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
            <TextField
              id="name"
              type="name"
              label="Enter name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="button-area div-row">
              <Button onClick={handleNext}>Next</Button>
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
            <TextField
              id="phone"
              label="Enter phone"
              variant="outlined"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="button-area div-row">
              <Button onClick={handlePrev} className="button-back">Back</Button>
              <Button onClick={handleNext}>Next</Button>
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
            <TextField
              id="email"
              label="Enter email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="button-area div-row">
              <Button onClick={handlePrev} className="button-back">Back</Button>
              <Button onClick={handleNext}>Next</Button>
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
              <p className="name-space"><span>Name:</span> {name}</p>
              <p className="name-space"><span>Phone:</span> {phone}</p>
              <p className="name-space"><span>Email:</span> {email}</p>
            </div>
            <div className="button-area div-row">
              <Button onClick={handlePrev} className="button-back">Back</Button>
              <button type='submit'>Confirm</button>
            </div>
          </div>
        )
      default:
        return null;
    }
  };

  return (
    <div className="div-column chanegable-form">
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
    
  );
};
