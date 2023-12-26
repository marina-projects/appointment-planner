import React from "react";

export const AppointmentCard = ( {nameApp, date, time, chosenContact } ) => {
    return (
        <>
            <div className="tile-container div-column">
                <h2>Appoinment card</h2>
                <p>Name: {nameApp}</p>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
                <div className="contact-container div-column">
                    <h3>Contact:</h3>
                    {chosenContact ? (
                        <>
                        <p>Phone: {chosenContact.phone}</p>
                        <p>Email: {chosenContact.email}</p>
                        </>
                    ) : (
                        <p>No contact selected</p>
                    )}
                </div>
            </div>
        </>

    )
}