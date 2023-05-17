import React, { useState } from 'react';
import Chair from '../../../images/chair.png'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
const AppointmentHeader = () => {
    const [value, onChange] = useState (new Date());
    return (
        <main className='row d-flex align-items-center'>
        <div className="col-md-4 offset-md-1 ">
        <Calendar onChange={onChange} value={value} />
        </div>
        <div className="col-md-6">
            <img src={Chair} alt="" className="img-fluid" />
        </div>

    </main>
    );
};

export default AppointmentHeader;