import React from "react";

import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {

  return (
    <div className="div-column">
        <h2>Contacts</h2>
        <TileList array={contacts}/>
    </div>
  );
};
