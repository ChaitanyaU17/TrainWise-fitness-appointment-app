import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import LazyLoad from "react-lazyload";

const Footer = () => {
  return (
    <div className="md:mx-10 bg-primary text-[#f97000] rounded-md">
      <div className="flex flex-col p-5 sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* --- left section --- */}
        <div>
          <p className="flex items-center text-4xl font-black text-[#f97000]">
            <LazyLoad
             height={201} // Set height for LazyLoad placeholder
             offset={100} // Start loading image when it's 100px before coming into view
             once // Load only once when the image first becomes visible
             placeholder={<div className="bg-gray-300 h-[201px] w-full" />}
            >
            <img className="mb-5 w-40" src={assets.logo} alt="" />
            </LazyLoad>
            
            TrainWise
          </p>
          <p className="w-full md:w-2/2 text-slate-300 leading-6">
            TrainWise is a dynamic platform that connects fitness enthusiasts
            with professional trainers across various specialties, including yoga,
            strength training, cardio, and more. We believe in empowering
            individuals to achieve their fitness goals with ease and
            flexibility.
          </p>
        </div>

        {/* --- center section --- */}
        <div>
          <p className="text-xl mb-5 font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-slate-300">
            <NavLink to='/' onClick={() => scrollTo(0, 0)} className={`hover:text-slate-100`}>HOME</NavLink>
            <NavLink to='about' onClick={() => scrollTo(0, 0)} className={`hover:text-slate-100`}>ABOUT US</NavLink>
            <NavLink to='/contact' onClick={() => scrollTo(0, 0)} className={`hover:text-slate-100`}>CONTACT US</NavLink>
            <NavLink>Privacy Policy</NavLink>
          </ul>
        </div>

        {/* --- right section --- */}
        <div>
          <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-slate-300">
            <li>+91-212-417-8899</li>
            <li>chaitanyaumbarkar2002@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* --- copyright text --- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 TrainWise - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
