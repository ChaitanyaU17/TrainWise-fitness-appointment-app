// import React from 'react'
import LazyLoad from "react-lazyload";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800 "
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-sm text-center">
        Explore our diverse range of certified fitness trainers, and easily book
        your personalized training session to meet your fitness goals.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`trainers/${item.speciality}`}
          >
            <LazyLoad
             height={201} // Set height for LazyLoad placeholder
             offset={100} // Start loading image when it's 100px before coming into view
             once // Load only once when the image first becomes visible
             placeholder={<div className="bg-gray-300 h-[201px] w-full" />}
            >
            <img
              className="w-16 sm:w-24 mb-2 rounded-full"
              src={item.image}
              alt=""
            />
            </LazyLoad>
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
