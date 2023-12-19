import React from "react";

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
        <input id="name" type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        <input id="phone" type="phone" value={phone} placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} />
        <input id='email' type='email' value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

