import React from 'react';
import Service from './Service';
import design from "../../assets/Services/designer.json";
import add from "../../assets/Services/add animation.json";
import integration from "../../assets/Services/integration.json";
import seo from "../../assets/Services/seo.json";
import maintain from "../../assets/Services/maintanance.json";
import train from "../../assets/Services/remote-training.json";


const Services = () => {
 

 const services = [
    {
      id: 1,
      serviceName: "Design and development of websites and applications.",
      animation: design,
    },
    {
      id: 2,
      serviceName:
        "Integration of websites with databases and other back-end systems.",
      animation: integration,
    },
    {
      id: 3,
      serviceName:
        "Creation of user-friendly and visually appealing interfaces.",
      animation: add,
    },
    {
      id: 4,
      serviceName:
        "Optimization of websites for search engines (SEO) and performance.",
      animation: seo,
    },
    {
      id: 5,
      serviceName:
        "Implementation of security measures to protect websites and user data.",
      animation: maintain,
    },
    {
      id: 6,
      serviceName:
        "Maintenance and updates to keep websites and applications running smoothly.",
      animation: train,
    },
  ];
 return (
   <div>
     <h1 className="text-lg lg:text-3xl font-bold text-secondary text-center py-10">
       
       My Services
     </h1>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
       {services.map((service, i) => <Service key={i} service={service}></Service>)
       
       }

     </div>
   </div>
 );
};

export default Services;