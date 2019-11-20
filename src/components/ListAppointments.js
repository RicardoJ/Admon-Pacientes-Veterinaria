import React from 'react';
import Appointment  from './Appointment';
import PropTypes from 'prop-types';
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
 ListAppointment.propTypes ={
    appointments : PropTypes.array.isRequired,
    deleteDate : PropTypes.func.isRequired
 }
export default ListAppointment;