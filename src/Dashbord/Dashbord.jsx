import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='ms-[250px]'>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashbord;
