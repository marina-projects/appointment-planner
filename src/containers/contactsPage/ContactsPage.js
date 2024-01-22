import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import '../contactsPage/contactPage.css';

import { ContactList } from "../../components/contactList/ContactList";

export const ContactsPage = ({contacts, addContact}) => {

  return (
    <div className="main-form-section div-row">
        <div className="info-form-section div-column">
          <h3>Contact list</h3>
          <p className="white-font">Here is your contact list. You can manage it and add new contact.</p>          
          <NavLink to="/form" className="add-new">Add new contact</NavLink>
        </div>
        <div className="form-section div-column">
          <h2 className="headline-mobile">Contact list</h2>
          <div className="contacts div-column">
            {
              !contacts || contacts.length === 0 ? <p>There is no appointments yet</p> : <ContactList array={contacts}/>
            }
          </div>
        </div>
    </div> 
  )
};