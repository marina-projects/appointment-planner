import React from "react";
import TextField from '@mui/material/TextField';

export const LoginForm = ( {handleLoginLogout} ) => {

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

        <button type='submit' className="secondary-button">Login</button>
      </form>
      </>
  );
};
