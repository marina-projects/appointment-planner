import React, {useEffect, useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import "../formPage/formPage.css"
import { NavLink, useNavigate } from "react-router-dom";
import iconLine from '../../images/icon-line.svg'

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
      <div>
        <section className="form-section">
            <ul>
                <li><NavLink to="/form">1</NavLink></li>
                <li><img src={iconLine} alt="" /></li>
                <li><NavLink to="/add-appointment">2</NavLink></li>
            </ul>
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
      </div>
    );
  };
  