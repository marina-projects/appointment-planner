import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
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
    alert(`Name: ${name}, email: ${email}, phone: ${phone}`);
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

    /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

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
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
