import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className='bg-gray-100 p-5 h-[100%]'>
            <h1 className='text-2xl font-bold mb-4'>Resume</h1>
            <div className='bg-white p-5 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold'>Fayozbek Nishonov</h2>
                <p className='text-gray-700'>Front-End Developer</p>
                <p className='mt-2'>Email: <a href="mailto:fayoz1007@gmail.com" className='text-blue-500'>{`fayoz1007@gmail.com`}</a></p>
                <p>Phone: <span className='text-gray-700'>+998 97 410 07 60</span></p>
                <p>Location: <span className='text-gray-700'>Toshkent, Uzbekistan</span></p>

                <h3 className='text-lg font-[500] text-gray-500 mt-5'>Skills</h3>
                <ul className='list-disc ml-5'>
                    <li className='text-[16px] font-[500] text-red-500'>HTML</li>
                    <li className='text-[16px] font-[500] text-blue-500'>Css</li>
                    <li className='text-[16px] font-[500] text-pink-500'>Sass</li>
                    <li className='text-[16px] font-[500] text-blue-500'>Tailwind CSS</li>
                    <li className='text-[16px] font-[500] text-yellow-500'>JavaScript</li>
                    <li className='text-[16px] font-[500] text-blue-600'>React.js</li>
                    <li className='text-[16px] font-[500] text-[#0000008b]'>Next.js</li>
                </ul>

                <h3 className='text-lg font-[500] text-gray-500 mt-5'>Experience</h3>
                <div className='list-disc ml-5'>
                    <p className='text-gray-600 font-[500]'>I am Front-End Developer and have 6 months of experience. During the course, we worked on many sites. For example, we completed The Movie Database (TMDB), GreenShop, Ht-med.uz and other projects. I mainly made projects in React.js and Next.js. I used Tailwenda.css for css. I am also trying to work on big projects. Because big and real projects teach me a lot.
                    </p>
                </div>

                <h3 className='text-lg font-[500] text-gray-500 mt-5'>Education</h3>
                <div className='list-disc ml-5'>
                    <p className='text-gray-600 font-[500]'>Soff Study</p>
                    <p className='text-gray-600 font-[500]'>Tashkent University of Information Technologies</p>
                </div>

                {/* New Sections Added */}
                <h3 className='text-lg font-[500] text-gray-500 mt-5'>Projects</h3>
                <div className='list-disc ml-5'>
                    <p className='text-gray-600 font-[500]'>
                        <Link target="_blank" rel="noopener noreferrer" to={"https://master--the-movie-tmdb-2024.netlify.app/"}>
                            The Movie Database (TMDB)
                        </Link>
                    </p>
                    <p className='text-gray-600 font-[500]'>
                        <Link target="_blank" rel="noopener noreferrer" to={"https://master--my-green-shop.netlify.app/"}>
                            GreenShop
                        </Link>
                    </p>
                    <p className='text-gray-600 font-[500]'>
                        <Link target="_blank" rel="noopener noreferrer" to={"https://ht-med-uz-2024.netlify.app/"}>
                            Ht-med.uz
                        </Link>
                    </p>
                </div>

                <h3 className='text-lg font-[500] text-gray-500 mt-5'>Languages</h3>
                <div className='list-disc ml-5'>
                    <p className='text-gray-600 font-[500]'>English: B1</p>
                    <p className='text-gray-600 font-[500]'>Uzbek: Native</p>
                </div>

                <h3 className='text-lg font-[500] text-gray-500 mt-5'>References</h3>
                <div className='list-disc ml-5'>
                    <p className='text-gray-600 font-[500]'>Certificate from Soff Study training center</p>
                </div>
            </div>
        </div>
    );
}

export default Resume;
