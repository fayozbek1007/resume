import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import { MdEqualizer } from "react-icons/md";
// import myimg from "../../assests/my-img.jpg"


const Navbar = () => {
    return (
        <div className='fixed w-[250px] bg-slate-300 px-[30px] py-[20px] h-[702px]'>
            <div>
                <Link to={"/"}>
                    <p className='font-[400] text-[22px]'>
                        Nishonov
                        <br />
                        <span className='font-[600] text-[22px]'>
                            Fayozbek
                        </span>
                        <br />
                        <span>
                            Norpulat
                        </span>
                    </p>
                </Link>
            </div>

            <ul className='mt-[20px]'>
                <li className='text-[16px] font-[500] mt-[10px]'>
                    <Link to="/" className='flex items-center gap-[5px]'>
                        <IoPersonOutline className='text-[18px]' />
                        About
                    </Link>
                </li>
                <li className='text-[16px] font-[500] mt-[10px]'>
                    <Link to="/experience" className='flex items-center gap-[5px]'>
                        <GiProgression className='text-[18px]' />
                        Experience
                    </Link>
                </li>
                <li className='text-[16px] font-[500] mt-[10px]'>
                    <Link to="/contact" className='flex items-center gap-[5px]'>
                        <MdContactPhone className='text-[18px]' />
                        Contact
                    </Link>
                </li>
                <li className='text-[16px] font-[500] mt-[10px]'>
                    <Link to="/projects" className='flex items-center gap-[5px]'>
                        <GiProgression className='text-[18px]' />
                        Projects
                    </Link>
                </li>
                <li className='text-[16px] font-[500] mt-[10px]'>
                    <Link to="/skills" className='flex items-center gap-[5px]'>
                        <MdEqualizer className='text-[18px' />
                        Skills
                    </Link>
                </li>
                <li className='text-[16px] font-[500] mt-[10px]'>
                    <Link to="/resume" className='flex items-center gap-[5px]'>
                        <IoDocumentText className='text-[18px' />
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
