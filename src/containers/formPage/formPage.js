import React, {useEffect, useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { useNavigate } from "react-router-dom";
import { Person, Telephone, Envelope } from 'react-bootstrap-icons';

export const FormPage = ({contacts, addContact}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isDuplicate, setIsDuplicate] = useState(false);

    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!isDuplicate) {
        addContact(name, phone, email);
        setName('');
        setPhone('');
        setEmail('');
        navigate('/add-appointment');
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
      <div className="main-form-section div-row">
        <div className="info-form-section div-column">
          <h3>Add Contact</h3>
          <div className="form-places name-place div-row">
              <Person />
              <p>{name}</p>
          </div>
          <div className="form-places phone-place div-row">
              <Telephone />
              <p>{phone}</p>
          </div>
          <div className="form-places email-place div-row">
              <Envelope />
              <p>{email}</p>
          </div>
        </div>
        <div className="form-section div-column">
            <h2 className="headline-mobile">Add a Contact</h2>
            <ContactForm 
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail}
              handleSubmit={handleSubmit}
            />

        </div>
        <hr />
      </div>
    );
  };
  