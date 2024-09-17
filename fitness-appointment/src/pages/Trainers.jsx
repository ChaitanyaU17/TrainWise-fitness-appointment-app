import React from 'react'

const Trainers = () => {
  return (
    <div>
      <div className="text-gray-600">
      <p>Browse through the fitness trainers specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          >
          Filters
        </button>
        <div
          className={` flex-col gap-4 text-sm text-gray-600 ${
            
          }`}
        >
          <p
            onClick={() =>
              speciality === "Evolve yoga"
               
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Evolve yoga" ? "bg-[#f97000b5] text-black" : ""
            }`}
          >
            Evolve yoga
          </p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Trainers;
