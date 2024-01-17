import React from "react";
import TextField from '@mui/material/TextField';
import '../contactForm/contactForm.css';

export const ContactFieldName = ({
    name,
    setName
  }) => {
    return (
      <>
        <TextField
          id="name"
          label="Enter name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </>
    )
}