import React from "react";
import '../contactsPage/contactPage.css';

import { ContactList } from "../../components/contactList/ContactList";

export const ContactsPage = ({contacts, addContact}) => {
  return (
    <div className="main-form-section div-row">
        <div className="info-form-section div-column">
          <h2>Contact list</h2>
          <p className="white-font">Here is your contact list. You can manage it and add new contact.</p>
          <button className="add-new">Add new contact</button>
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

// if(!contacts || contacts.length === 0) {
  //   return (
  //     <div className="contacts div-column">
  //         <h2>Contacts</h2>
  //         <p>There is no appointments yet</p>
  //     </div>
  //   );
  //   } else {
  //     return (
  //       <div className="contacts div-column">
  //         <h2>Contacts</h2>
  //         <ContactList array={contacts}/>
  //       </div>
  //     )
  //   }