import React from 'react';
import { FaPhoneVolume } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='bg-[#00000009] h-[702px] p-[30px]'>
            <div className='w-[800px] h-[300px] border-gray-500 pt-[20px] mx-[auto] my-0 shadow-xl bg-gray-200 rounded-[20px]'>
                <div className='mt-[30px] ml-[70px]'>
                    <h1 className='text-[20px] font-[500] text-gray-400'>
                        Contact
                    </h1>
                    <div className='mt-[20px] w-[600px] flex justify-between'>
                        <ul>
                            <li className='text-[18px] flex items-center gap-[6px]'>
                                <FaPhoneVolume />
                                Phone :
                            </li>
                            <li className='text-[18px] flex items-center gap-[6px] mt-[10px]'>
                                <Link className=' flex  items-center gap-[6px]' to="https://t.me/braus04" target="_blank" rel="noopener noreferrer">
                                    <PiTelegramLogo />
                                    Telegram :
                                </Link>
                            </li>
                            <li className='text-[18px] flex items-center gap-[6px] mt-[10px]'>
                                <Link className=' flex  items-center gap-[6px] ' to="mailto:fayoz1007@gmail.com" target="_blank" rel="noopener noreferrer" >
                                    <MdOutlineEmail />
                                    Email :
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                +998 97 410 07 60 , +998 97 428 77 82
                            </li>
                            <li className='mt-[10px]'>
                                <Link to="https://t.me/braus04" target="_blank" rel="noopener noreferrer">
                                    @braus04
                                </Link>
                            </li>
                            <li className='mt-[10px]'>
                                <Link to="mailto:fayoz1007@gmail.com">
                                    fayoz1007@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
