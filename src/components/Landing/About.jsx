import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-screen  bg-white p-2 md:p-5'>
            <div className="text-black font-extrabold font-poppins uppercase text-center text-3xl md:text-5xl">About Us</div>

            <div className="w-full h-full flex flex-col md:items-center md:flex-row">
                <div className="h-[50%] w-full md:w-[50%] md:h-full">
                    <img src="/src/assets/white_logo.JPG" alt="" />
                </div>
                <div className="h-auto w-full md:w-[50%] md:h-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorum impedit fugiat amet! Voluptatem eius error, iure mollitia in eos ea velit adipisci, quis itaque non nam veritatis ut excepturi optio ab hic numquam accusantium. Dolorum dolor corrupti itaque at asperiores! Quibusdam praesentium deserunt obcaecati id necessitatibus non soluta. Similique, sit aliquam! Voluptas dolorum quo, asperiores explicabo possimus expedita similique perspiciatis. Reprehenderit ab nulla quis fugiat neque asperiores quasi, ea minima rerum aperiam atque, nostrum repellendus tempore eligendi perferendis doloribus quae obcaecati reiciendis ratione velit repellat. Aut, recusandae! Ratione, dolorem.</div>
            </div>
        </div>
    )
}

export default About
