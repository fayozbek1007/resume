import React from 'react';
import { FaPhoneVolume } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='bg-[#00000009] h-[702px] p-[20px]'>
            <h1 className='text-[20px] font-[500]'>
                Contact
            </h1>
            <div className='mt-[20px] w-[600px] flex justify-between'>
                <ul>
                    <li className='text-[18px] flex items-center gap-[6px]'>
                        <FaPhoneVolume />
                        Phone :
                    </li>
                    <li className='text-[18px] flex items-center gap-[6px] mt-[10px]'>
                        <PiTelegramLogo />
                        Telegram :
                    </li>
                    <li className='text-[18px] flex items-center gap-[6px] mt-[10px]'>
                        <MdOutlineEmail />
                        Email :
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
    );
}

export default Contact;
