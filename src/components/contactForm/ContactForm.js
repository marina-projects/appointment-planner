import React from "react";
import TextField from '@mui/material/TextField';
import '../contactForm/contactForm.css'
import { Outlet } from "react-router-dom";


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Enter name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextField
        id="phone"
        label="Enter phone"
        variant="outlined"
        type="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <TextField
        id="email"
        label="Enter email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        {/* <Outlet 
          name={name}
          setName={setName}
        /> */}
        <button type='submit'>Next</button>
      </form>
      </>
  );
};
