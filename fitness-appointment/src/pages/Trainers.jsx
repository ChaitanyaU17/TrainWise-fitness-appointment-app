// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import LazyLoad from "react-lazyload";

const Trainers = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterTrainers, setFilterTrainers] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { trainers } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterTrainers(
        trainers.filter((trainer) => trainer.speciality === speciality)
      );
    } else {
      setFilterTrainers(trainers);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [trainers, speciality]);

  // console.log(speciality);
  return (
    <div className="text-gray-600">
      <p>Browse through the fitness trainers specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={` flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Evolve yoga"
                ? navigate("/trainers")
                : navigate("/trainers/Evolve yoga")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Evolve yoga" ? "bg-[#f97000b5] text-black" : ""
            }`}
          >
            Evolve yoga
          </p>
          <p
            onClick={() =>
              speciality === "Strength +"
                ? navigate("/trainers")
                : navigate("/trainers/Strength +")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Strength +" ? "bg-[#f97000b5] text-black" : ""
            }`}
          >
            Strength +
          </p>
          <p
            onClick={() =>
              speciality === "Dance fitness"
                ? navigate("/trainers")
                : navigate("/trainers/Dance fitness")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dance fitness" ? "bg-[#f97000b5] text-black" : ""
            }`}
          >
            Dance fitness
          </p>
          <p
            onClick={() =>
              speciality === "Cardio HIIT"
                ? navigate("/trainers")
                : navigate("/trainers/Cardio HIIT")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Cardio HIIT" ? "bg-[#f97000b5] text-black" : ""
            }`}
          >
            Cardio HIIT
          </p>
          <p
            onClick={() =>
              speciality === "Cycling boost"
                ? navigate("/trainers")
                : navigate("/trainers/Cycling boost")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Cycling boost" ? "bg-[#f97000b5] text-black" : ""
            }`}
          >
            Cycling boost
          </p>
          <p
            onClick={() =>
              speciality === "Boxing endurance"
                ? navigate("/trainers")
                : navigate("/trainers/Boxing endurance")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Boxing endurance"
                ? "bg-[#f97000b5] text-black"
                : ""
            }`}
          >
            Boxing endurance
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterTrainers.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <LazyLoad>
                <img className="h-[220px] w-[400px] object-cover" src={item.image} alt="" />
              </LazyLoad>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
