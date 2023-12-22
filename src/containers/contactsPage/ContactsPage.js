import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    };
  };

  useEffect(() => {
    const nameIsduplicate =()=> {
      const searchForDuplicate= contacts.find((contact)=> contact.contactName=== name);
       if (searchForDuplicate !== undefined ){
         return true;
       }
       return false ;
    };

    if (nameIsduplicate()){
      setIsDuplicate(true);
    }else {
      setIsDuplicate(false);
    }
  
  }, [name,contacts,isDuplicate]);  

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleSubmit={handleSubmit}        
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts}/>
      </section>
    </div>
  );
};
