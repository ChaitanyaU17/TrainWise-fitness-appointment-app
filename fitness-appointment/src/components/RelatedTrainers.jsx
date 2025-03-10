/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

const RelatedTrainers = ({ trainerId, speciality }) => {
  const navigate = useNavigate();
  const { trainers } = useContext(AppContext);
  const [relTrainers, setRelTrainers] = useState([]);

  useEffect(() => {
    if (trainers.length > 0 && speciality) {
      const trainersData = trainers.filter(
        (trainer) =>
          trainer.speciality === speciality && trainer._id !== trainerId
      );
      setRelTrainers(trainersData);
    }
  }, [trainers, speciality, trainerId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Trainers</h1>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relTrainers.slice(0, 5).map((item) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={item._id}
          >
            <LazyLoad
              height={201} // Set height for LazyLoad placeholder
              offset={100} // Start loading image when it's 100px before coming into view
              once // Load only once when the image first becomes visible
              placeholder={<div className="bg-gray-300 h-[201px] w-full" />}
            >
              <img
                className="bg-blue-50 h-[220px] w-[400px] object-cover"
                src={item.image}
                alt={item.name}
              />
            </LazyLoad>
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm text-center ${
                  item.isAvailable ? "text-green-500" : "text-gray-500"
                }`}
              >
                <p
                  className={`w-2 h-2 ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }  rounded-full`}
                ></p>
                <p>{item.isAvailable ? "Available" : "Not Available"}</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/trainers");
          window.scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
};

export default RelatedTrainers;
