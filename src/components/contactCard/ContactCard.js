import React from "react";
import './contactCard.css';
import iconEdit from '../../images/icon-edit.svg';
import iconClose from '../../images/icon-close.svg';
import iconEmail from '../../images/icon-email.svg';
import iconPhone from '../../images/icon-phone.svg';
import iconUser from '../../images/icon-user.svg';

export const ContactCard = ({name, phone, email}) => {
  return (
    <div className="contact-card div-row">
      <div className="contact-data-text div-column">
        <p><img src={iconUser} alt=''/> {name}</p>
        <p><img src={iconPhone} alt=''/> {phone}</p>
        <p><img src={iconEmail} alt=''/> {email}</p> 
      </div>
      <div className="contact-data-icon">
        <img src={iconEdit} alt=''/>
        <img src={iconClose} alt=''/>
      </div>
    </div>
  );
};
