import React from "react";
import TextField from '@mui/material/TextField';
import '../contactForm/contactForm.css'


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


        {/* <label htmlFor="name">Name</label>
        <input id="name2" type="text" value={name} onChange={(e) => setName(e.target.value)}/> */}
        {/* <label htmlFor="phone">Phone</label>
        <input id="phone2" type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
        {/* <label htmlFor="email">Email</label>
        <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/> */}
        <button type='submit'>Next</button>
      </form>
      </>
  );
};
