import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader></AppointmentHeader>
        </div>
    );
};

export default Appointment;