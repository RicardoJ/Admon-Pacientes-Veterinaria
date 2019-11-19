import React from 'react';
import Appointment  from './Appointment';
const ListAppointment = ({appointments, deleteDate}) => {
    return ( 
        <div className = "card mt-2 py-5">
            <div className = "card-body">
                <h2 className = "card-title text-center">Administración de citas</h2>
                <div className = "lista-citas">
                    {appointments.map(appointment =>(
                        <Appointment
                            key = {appointment.id}
                            appointment = {appointment}
                            deleteDate = {deleteDate}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}
 
export default ListAppointment;