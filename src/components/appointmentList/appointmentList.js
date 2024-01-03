import React from 'react';
import {AppointmentCard} from '../appointmentCard/appointmentCard';

export const AppointmentList = ({appointments}) => {
    // Сортировка по возрастанию даты
    const sortedAppointments = appointments.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <>
            {sortedAppointments.map((appointment) => {
                return (
                    <AppointmentCard
                        key={appointment.date} // Обязательно добавьте ключ, чтобы избежать предупреждения в React
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
