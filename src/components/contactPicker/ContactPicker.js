import React from "react";
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import '../contactPicker/ContactPicker.css'

export const ContactPicker = ( {contacts, onChange} ) => {
  return (
    <>
      <Autocomplete
        disablePortal
        id="country-select-demo"
        options={contacts.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} label="Choose client" />}
        onChange={(event, newValue) => onChange({ target: { value: newValue } })} 
        name={contacts}
        fullWidth={true}
        size={'small'}
        // defaultValue={'Choose client'}
        className="contact-picker"
      />
    </>
  )
};
