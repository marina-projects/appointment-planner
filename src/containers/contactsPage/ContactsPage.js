import React from "react";
import '../contactsPage/contactPage.css';

import { ContactList } from "../../components/contactList/ContactList";

export const ContactsPage = ({contacts, addContact}) => {

  if(!contacts || contacts.length === 0) {
    return (
      <div className="contacts div-column">
          <h2>Contacts</h2>
          <p>There is no appointments yet</p>
      </div>
    );
    } else {
      return (
        <div className="contacts div-column">
          <h2>Contacts</h2>
          <ContactList array={contacts}/>
        </div>
      )
    }
};
