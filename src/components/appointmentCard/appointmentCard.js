import React from "react";
import '../appointmentCard/appointmentCard.css';
import iconEdit from '../../images/icon-edit.svg';
import iconClose from '../../images/icon-close.svg';
import iconEmail from '../../images/icon-email.svg';
import iconPhone from '../../images/icon-phone.svg';
import iconUser from '../../images/icon-user.svg';



export const AppointmentCard = ( {nameApp, date, time, chosenContact } ) => {

    return (
        <>
            <div className="appointment-container div-row">
                <div className="contact-container div-column">
                    <h3>Date: {date}</h3>
                    <h3>Time: {time}</h3>
                    <div className="contact-data div-row">
                        <div className="contact-data-text div-column">
                            <h3>Contact data:</h3>
                            {chosenContact ? (
                                <>
                                <p><img src={iconUser} alt=''/>  {chosenContact.name}</p>
                                <p><img src={iconEmail} alt=''/> {chosenContact.phone}</p>
                                <p><img src={iconPhone} alt=''/> {chosenContact.email}</p>
                                </>
                            ) : (
                                <p>No contact selected</p>
                            )}
                        </div>
                        <div className="contact-data-icon">
                            <img src={iconEdit} alt=''/>
                        </div>
                        
                    </div>
                </div>
                <div className="icons-container div-row">
                        <img src={iconEdit} alt=''/>
                        <img src={iconClose} alt='' />
                </div>
            </div>
        </>

    )
}