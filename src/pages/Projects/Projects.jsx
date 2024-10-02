import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            title: "The Movie Database (TMDB)",
            description: "Brief description of Project 1.",
            img: "https://nkpremices.com/content/images/2021/08/mih10uhu1464fx1kr0by-1.jpg",
            link: "https://master--the-movie-tmdb-2024.netlify.app/"
        },
        {
            title: "Project 2",
            description: "Brief description of Project 2.",
            img: "https://cdn.dribbble.com/users/10136857/screenshots/17074202/media/7eb4e39bdd54eb1747a2112e47e78a64.jpg?resize=1000x750&vertical=center",
            link: "https://master--my-green-shop.netlify.app/"
        },
        {
            title: "Project 3",
            description: "Brief description of Project 3.",
            link: "https://your-deployed-link-3.com"
        }
    ];

    return (
        <div className='bg-[#00000009] h-[702px] p-5'>
            <h1 className='text-[24px] mb-5'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                        <h2 className='text-lg font-bold'>{project.title}</h2>
                        <Link to={project.link}  target="_blank"
                            rel="noopener noreferrer">
                            <img className='w-[400px] h-[250px] my-[20px] rounded-[18px]' src={project.img} alt="" />
                        </Link>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-gray-600 underline mt-2 block'
                        >
                            Show project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
