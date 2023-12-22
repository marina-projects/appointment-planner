import React from 'react';
import {AppointmentCard} from '../appointmentCard/appointmentCard';

export const AppointmentList = ( {appointments} ) => {
    return (
        <>
            {appointments.map((appointment) => {
                return (
                    <AppointmentCard 
                      nameApp={appointment.nameApp}
                      date={appointment.date}
                      time={appointment.time}
                      chosenContact={appointment.chosenContact}
                    />       
                  )
            })}
        </>
    )
}