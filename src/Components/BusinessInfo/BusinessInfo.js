import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import './BusinessInfo.css';
import { faClockRotateLeft,faMap,faPhone} from '@fortawesome/free-solid-svg-icons'
const infosData=[
    {
        title:'Opening Hours',
        description:'We are open in 7 days',
        icon: faClockRotateLeft,
        background:'Primary'
    },
    {
        title:'Opening Hours 2',
        description:'We are open in 7 days',
        icon:faMap,
        background:'Dark'
    },
    {
        title:'Opening Hours 3',
        description:'We are open in 7 days',
        icon:faPhone,
        background:'Primary'
    }

]
const BusinessInfo = () => {
    return (
        <section className='justify-content-center row ml-2 mr-5 margin'>
           {
               infosData.map(info=><InfoCard info={info} key={Math.random()}></InfoCard>)
           } 
        </section>
    );
};

export default BusinessInfo;