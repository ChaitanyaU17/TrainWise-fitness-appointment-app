// import React from 'react'

import LazyLoad from "react-lazyload";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="flex flex-col my-10 md:flex-row gap-12">
        <LazyLoad>
        <img className="w-full md:max-w-[360px]" src={assets.about} alt="" />
        </LazyLoad>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            At TrainWise, we are committed to revolutionizing the way people
            achieve their fitness goals by connecting them with certified,
            professional trainers across various specialties. Whether you're
            interested in yoga, strength training, cardio, or even boxing, we
            make it easy to find and book sessions with experts who can guide
            you on your fitness journey.
          </p>
          <p>
            Our platform is designed to be user-friendly, offering a seamless
            booking experience while providing a wide range of trainers to suit
            your individual needs. We believe that everyone deserves access to
            quality fitness training, and our goal is to empower individuals to
            stay healthy, active, and confident through personalized sessions.
          </p>
          <b className="text-gray-800">OUR VISION</b>
          <p>
            With TrainWise, you are not just booking a session you are investing
            in a healthier, stronger, and more balanced version of yourself.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="text-gray-500">
          WHY <span className="text-gray-700 font-medium">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-[#f97000] transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency: </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            atque fugiat architecto!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-[#f97000] transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            nemo? Eius, unde!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-[#f97000] transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization: </b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            minima accusantium consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
