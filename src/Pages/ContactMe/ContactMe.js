import React from 'react';
import './ContactMe.css'

const ContactMe = () => {
 return (
   <div>
     <div className="bg-base-200 p-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
         <div className="text-center w-[300px] lg:w-full">
           <h1 className="text-5xl font-bold">
             Don't hesitate – contact me now and let's get started!
           </h1>
           <p className="py-6">
             If you would like to contact me via email, you can send me a
             message at davidburgman@gmail.com. I would be happy to
             hear from you and will do my best to respond as soon as possible.
             Alternatively, you can also reach out to me on my social media
             accounts or through any other means of communication that you have
             access to. I look forward to hearing from you soon!
           </p>
         </div>
         <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
           {/* <div className="card-body">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input
                 type="text"
                 placeholder="email"
                 className="input input-bordered"
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input
                 type="text"
                 placeholder="password"
                 className="input input-bordered"
               />
               <label className="label">
                 <a href="#" className="label-text-alt link link-hover">
                   Forgot password?
                 </a>
               </label>
             </div>
             <div className="form-control mt-6">
               <button className="btn btn-primary">Login</button>
             </div>
           </div> */}



    <form className="Form">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        required
      />

      <button type="submit">Submit</button>
    </form>
         </div>
       </div>
     </div>
   </div>
 );
};

export default ContactMe;