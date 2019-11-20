import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteDate}) => {
    return(
   <div className = "media mt-3">
       <div className = "media-body">
           <h3 className = "mt-0">{appointment.pet}</h3>
           <p className = "card-text"><span>Nombre del dueño: </span>{appointment.owner}</p>
           <p className = "card-text"><span>Fecha: </span>{appointment.date}</p>
           <p className = "card-text"><span>Hora: </span>{appointment.hour}</p>
           <p className = "card-text"><span>Síntomas: </span>{appointment.symptoms}</p>
           <p className = "card-text">{appointment.symptoms}</p>

           <button
           className = "brn btn-danger"
           onClick = {()=> deleteDate(appointment.id)}
           >Borrar &times;</button>
       </div>
   </div>
   );
}
Appointment.propTypes ={
    appointment : PropTypes.object.isRequired,
    deleteDate : PropTypes.func.isRequired
 }
 
export default Appointment;