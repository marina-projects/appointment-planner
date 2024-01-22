import React from "react";
import TextField from '@mui/material/TextField';
import '../signUpForm/signUpForm.css';


export const SignUpForm = ( {handleLoginLogout} ) => {

  return (
    <>
      <form onSubmit={handleLoginLogout}>
      <TextField
        id="name"
        label="Enter name"
        variant="outlined"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
        // required
      />

      <TextField
        id="email"
        label="Enter email"
        variant="outlined"
        type="email"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        id="password"
        label="Enter password"
        variant="outlined"
        type="password"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        id="confirm-password"
        label="Confirm password"
        variant="outlined"
        type="password"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />

        <button type='submit' className="secondary-button">Sign up</button>
      </form>
      </>
  );
};
