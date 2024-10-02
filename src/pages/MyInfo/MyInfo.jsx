import React from 'react';

const MyInfo = () => {
    return (
        <div className='bg-[#00000009] w-[100%] h-[702px]'>
            <h1 className='text-[20px] p-[20px] font-[500] text-gray-600'>Information about me</h1>
            <div className='flex w-[700px] justify-between p-[20px]'>
                <ul>
                    <li className='text-[16px] text-green-600'>Full Name:</li>
                    <li className='text-[16px] text-green-600'>Age:</li>
                    <li className='text-[16px] text-green-600'>My current study:</li>
                    <li className='text-[16px] text-green-600'>Adress:</li>
                </ul>
                <ul>
                    <li className='text-[17px] text-gray-700'>Nishonov Fayozbek</li>
                    <li className='text-[17px] text-gray-700'>2004/10/07  age:20</li>
                    <li className='text-[17px] text-gray-700'>Toashkent University of Information Technologies 3-course</li>
                    <li className='text-[17px] text-gray-700'>Kashkadarya region</li>
                </ul>
            </div>
        </div>
    );
}

export default MyInfo;
