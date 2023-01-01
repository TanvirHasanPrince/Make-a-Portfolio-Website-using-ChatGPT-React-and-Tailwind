import React from 'react';
import myphoto from '../../assets/aboutme/319674655_5681389291980479_7530057649767194400_n.jpg'

const AboutMe = () => {
 return (
   <div>
     <div className="bg-base-200 p-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
         <div className="w-[300px] lg:w-full">
           <img src={myphoto} alt="" className="rounded" />
         </div>

         <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
           <h1 className="lg:text-5xl text-secondary font-bold"></h1>
           <p className="py-6 lg:text-lg text-sm text-center">
             I am a skilled web developer with over five years of experience in
             the industry. In my current role at Developer Company, I have developed and
             maintained a variety of websites and web applications using a range
             of technologies, including HTML, CSS, JavaScript, and React. I have a
             strong understanding of web development principles and a proven
             track record of delivering high-quality, user-friendly websites on
             time and within budget. I am confident that my skills and
             experience make me a strong inclusion in the team.
             
             <br>
             </br>
             <br>
             </br> 
             In
             addition to my technical abilities, I am a detail-oriented and
             organized individual who is able to work independently and as part
             of a team. I am also a quick learner who is always looking for ways
             to improve my skills and stay up-to-date with the latest
             developments in web development. I look forward to the
             opportunity to discuss your projects further and demonstrate my
             abilites.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default AboutMe;