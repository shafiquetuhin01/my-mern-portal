import React from "react"; 
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
    const services = [
        {
            _id:1,
            name:"Fluoride Treatment",
            description:"",
            img:fluoride
        },
        {
            _id:2,
            name:"Cavity Filling",
            description:"",
            img:cavity
        },
        {
            _id:3,
            name:"Teeth whitening",
            description:"",
            img:whitening
        },
    ]
  return (
    <div className="py-28">
      <div className="text-center font-bold">
        <h3 className="text-primary text-xl uppercase">Our Services</h3>
        <h3 className="text-4xl">Services We Provide</h3>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {
            services.map(service=><Service key={service._id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
