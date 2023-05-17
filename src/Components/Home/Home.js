import React from 'react';
import Appointment from '../Appointment/Appoinment/Appointment';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Shared/Navbar/Navbar';
import './Home.css'
const Home = () => {
    return (
        <div className='header-container'>
 
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Home;