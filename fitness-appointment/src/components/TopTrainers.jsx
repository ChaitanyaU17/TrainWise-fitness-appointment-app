import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import LazyLoad from "react-lazyload";

const TopTrainers = () => {
  const navigate = useNavigate();
  const { trainers } = useContext(AppContext);

  useEffect(() => {
    // trainers data could be fetched or handled here if needed
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Fitness Trainers to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Explore our carefully curated list of trusted fitness trainers.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {trainers.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <LazyLoad
              height={201} // Set height for LazyLoad placeholder
              offset={100} // Start loading image when it's 100px before coming into view
              once // Load only once when the image first becomes visible
              placeholder={<div className="bg-gray-300 h-[201px] w-full" />} // Placeholder before image loads
            >
              <div className="h-[201px] w-full overflow-hidden">
                <img
                  className="h-[220px] w-[400px] object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
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
      <button
        onClick={() => {
          navigate("/trainers");
          scrollTo(0, 0);
        }}
        className="bg-primary text-[#f97000b5] px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};

export default TopTrainers;
