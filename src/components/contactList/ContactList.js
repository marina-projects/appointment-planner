import React from "react";
import { ContactCard } from '../contactCard/ContactCard';
import '../contactList/contactList.css';

export const ContactList = ({array}) => {
  return (
    <div className="contact-list div-column">
      
      {array.map((arrayItem) => {
        return (
          <ContactCard
            name={arrayItem.name}
            email={arrayItem.email}
            phone={arrayItem.phone}
          />       
        )
      })}
    </div>
  );
};
