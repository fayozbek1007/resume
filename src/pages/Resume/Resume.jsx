import React from 'react';

const Resume = () => {
    return (
        <div className='bg-gray-100 p-5 h-[702px]'>
            <h1 className='text-2xl font-bold mb-4'>Resume</h1>
            <div className='bg-white p-5 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold'>Fayozbek Nishonov</h2>
                <p className='text-gray-700'>Front-End Developer</p>
                <p className='mt-2'>Email: <a href="mailto:fayoz1007@gmail.com" className='text-blue-500'>{`fayoz1007@gmail.com`}</a></p>
                <p>Phone: <span className='text-gray-700'>+998 97 410 07 60</span></p>
                <p>Location: <span className='text-gray-700'>Toshkent, Uzbekistan</span></p>
                
                <h3 className='text-lg font-bold mt-5'>Skills</h3>
                <ul className='list-disc ml-5'>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                    <li>API Integration</li>
                </ul>

                <h3 className='text-lg font-bold mt-5'>Experience</h3>
                <ul className='list-disc ml-5'>
                    <li>
                        <strong>Front-End Developer Intern</strong> - [Company Name] <br />
                        <span className='text-gray-500'>June 2023 - August 2023</span>
                        <p>Developed and maintained responsive web applications using React.js.</p>
                    </li>
                    <li>
                        <strong>Freelance Web Developer</strong> <br />
                        <span className='text-gray-500'>January 2022 - May 2023</span>
                        <p>Created various projects for clients, focusing on UI/UX design and performance optimization.</p>
                    </li>
                </ul>

                <h3 className='text-lg font-bold mt-5'>Education</h3>
                <ul className='list-disc ml-5'>
                    <li>
                        <strong>Frontend Development Course</strong> - [Institution Name] <br />
                        <span className='text-gray-500'>Completed: December 2022</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;
