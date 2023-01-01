import React from 'react';
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import webDevAnimation from './../../assets/Banner/91382-web-development.json'

const Banner = () => {




 return (
   <div>
     <div className="bg-base-200 p-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
         <div className="w-[300px] lg:w-full">
           <Lottie animationData={webDevAnimation} loop={true} />;
         </div>

         <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
           <h1 className="lg:text-5xl text-secondary font-bold">
             <Typewriter
               options={{
                 strings: ["I am David Burgman", "A Frontend Web Developer"],
                 autoStart: true,
                 loop: true,
               }}
             />
           </h1>
           <p className="py-6 lg:text-lg text-sm text-center">
             I am  a frontend web developer with a passion for
             creating intuitive and visually appealing user experiences. I have
             experience with a wide range of frontend technologies, including
             HTML, CSS, and JavaScript, and is skilled at using these tools to
             bring design mockups to life. I am a strong problem-solver and
             is able to quickly learn new technologies and frameworks as needed.
             In my spare time, I enjoys staying up-to-date with the latest
             frontend trends and experimenting with new technologies. I am
             always looking for opportunities to grow and learn as a developer.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Banner;