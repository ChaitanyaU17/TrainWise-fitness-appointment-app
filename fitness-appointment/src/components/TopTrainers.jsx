import React from 'react'

const TopTrainers = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
    <h1 className="text-3xl font-medium">Top Fitness Trainers to Book</h1>
    <p className="sm:w-1/3 text-center text-sm">
      Explore our carefully curated list of trusted fitness trainers.
    </p>
    
    
    <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
     
        
          <div className="h-[201px] w-full overflow-hidden">
            <LazyLoad>
              <img
                className="h-[220px] w-[400px] object-cover"
               src{''}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className="text-gray-900 text-lg font-medium">{}</p>
            <p className="text-gray-600 text-sm">{}</p>
          </div>
        </div>
      
    </div>
    <button
     
      className="bg-primary text-[#f97000b5] px-12 py-3 rounded-full mt-10"
    >
      more
    </button>
  
  </>


  )
}

export default TopTrainers;
