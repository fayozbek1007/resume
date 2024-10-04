import React from 'react';

const Skills = () => {
    return (
        <div className='h-[702px] bg-[#00000009] pt-[30px]'>
            <div className='w-[1000px] bg-gray-200 mx-[auto] py-[20px] rounded-[20px] px-[20px]'>
                <h1 className='text-[22px] font-[500] p-[10px] border-b-[2px] text-gray-400 border-gray-500 w-[950px]'>
                    Skills
                </h1>

                <div className='grid grid-cols-5 gap-[10px] mt-[20px]'>
                    <div className='mt-[10px]'>
                        <img className='w-[100px] h-[100px] rounded-[20px]' src="https://andrewborstein.com/assets/img/html5.png" alt="" />
                        <h1 className='text-[16px] mt-[15px] ml-[28px]'>
                            HTML
                        </h1>
                    </div>
                    <div className='mt-[10px]'>
                        <img className='w-[100px] h-[100px] rounded-[20px]' src="https://andrewborstein.com/assets/img/javascript.png" alt="" />
                        <h1 className='text-[16px] mt-[15px] ml-[15px]'>
                            Javascript
                        </h1>
                    </div>
                    <div className='mt-[10px]'>
                        <img className='w-[100px] h-[100px] rounded-[20px]' src="	https://andrewborstein.com/assets/img/react.png" alt="" />
                        <h1 className='text-[16px] mt-[15px] ml-[28px]'>
                            React.js
                        </h1>
                    </div>
                    <div className='mt-[10px]'>
                        <img className='w-[100px] h-[100px] rounded-[20px]' src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
                        <h1 className='text-[16px] mt-[15px] ml-[28px]'>
                            Next.js
                        </h1>
                    </div>
                    <div className='mt-[10px]'>
                        <img className='w-[100px] h-[100px] rounded-[20px]' src="	https://andrewborstein.com/assets/img/sass.png" alt="" />
                        <h1 className='text-[16px] mt-[15px] ml-[28px]'>
                            SASS
                        </h1>
                    </div>
                    <div className='mt-[10px]'>
                        <img className='w-[100px] h-[100px] rounded-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt="" />
                        <h1 className='text-[16px] mt-[15px] ml-[8px]'>
                            Tailwend.css
                        </h1>
                    </div>
                    <div className='mt-[10px]'>
                        <img className='w-[100px] h-[100px] rounded-[20px]' src="	https://andrewborstein.com/assets/img/css3.png" alt="" />
                        <h1 className='text-[16px] mt-[15px] ml-[30px]'>
                            CSS
                        </h1>
                    </div>
                    <div className='mt-[10px]'>
                        <img className='w-[100px] h-[100px] rounded-[20px]' src="	https://andrewborstein.com/assets/img/github.png" alt="" />
                        <h1 className='text-[16px] mt-[15px] ml-[37px]'>
                            Git
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
