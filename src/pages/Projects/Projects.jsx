import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiProjectorLine } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "The Movie Database (TMDB)",
            description: "Brief description of Project 1.",
            img: "https://nkpremices.com/content/images/2021/08/mih10uhu1464fx1kr0by-1.jpg",
            link: "https://master--the-movie-tmdb-2024.netlify.app/",
            css: "Tailwend.css",
            build: "React.js",
            show: "(TMDB)",
            git: "https://github.com/fayozbek1007/themovie.git"
        },
        {
            title: "GreenShop",
            description: "Brief description of Project 2.",
            img: "https://cdn.dribbble.com/users/10136857/screenshots/17074202/media/7eb4e39bdd54eb1747a2112e47e78a64.jpg?resize=1000x750&vertical=center",
            link: "https://greenshop-2024.netlify.app/",
            css: "Tailwend.css",
            build: "Next.js",
            show: "GreenShop",
            git: "https://github.com/fayozbek1007/64-lesson-home.git"
        },
        {
            title: "Ht-med.uz",
            description: "Brief description of Project 3.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvrPAND6vEod38cae9fzgAaUmJtW_ejKXWw&s",
            link: "https://ht-med-uz-2024.netlify.app/",
            css: "Tailwend.css",
            build: "Next.js",
            show: "Ht-med.uz",
            git: "https://github.com/fayozbek1007/Hi-Teach.git"
        }
    ];

    const [activeProject, setActiveProject] = useState(null);

    const handleCardClick = (index) => {
        setActiveProject(index === activeProject ? null : index);
    };

    const closeCard = () => {
        setActiveProject(null);
    };

    return (
        <div className='bg-[#00000009] h-auto p-5'>
            <h1 className='text-[24px] font-[500] text-gray-400 mb-5'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                        <h2 className='text-lg font-bold' onClick={() => handleCardClick(index)}>
                            {project.title}
                        </h2>
                        {activeProject === index ? (
                            <div className='relative'>
                                <img className='w-[400px] h-[250px] my-[20px] rounded-[18px]' src={project.img} alt="" />
                                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 flex flex-col items-center justify-center rounded-[18px]'>
                                    <button onClick={closeCard} className='text-red-500 mt-[-30px] ml-[300px]'>
                                        X
                                    </button>
                                    <div className='text-white'>
                                        <p className='text-[16px]'>Css: {project.css}</p>
                                        <p className='text-[16px]'>Build: {project.build}</p>
                                    </div>
                                    <div className='mt-[40px] flex gap-[20px]'>
                                        <Link to={project.link} target="_blank" rel="noopener noreferrer" className='mr-2 text-[16px] underline text-blue-600 flex items-center gap-[7px]'>
                                            {project.show}
                                            <span className='text-[18px] text-gray-500'>
                                                <RiProjectorLine />
                                            </span>
                                        </Link>
                                        <Link to={project.git} target="_blank" rel="noopener noreferrer" className='mr-2 text-[16px] underline text-blue-600 flex items-center gap-[7px]'>
                                            Show:
                                            <span className='text-[18px] text-gray-500'>
                                                <FaGithubSquare />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <img
                                className='w-[400px] h-[250px] my-[20px] rounded-[18px]'
                                src={project.img}
                                alt=""
                                onClick={() => handleCardClick(index)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
