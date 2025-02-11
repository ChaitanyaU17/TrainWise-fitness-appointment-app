import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const TrainersList = () => {
  
  const {trainers, aToken, getAllTrainers, changeAvailability} = useContext(AdminContext);

  useEffect(() => {
    if(aToken) {
      getAllTrainers();
      console.log(getAllTrainers());
    }
  }, [aToken])
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
        <h1 className="text-lg font-medium">All Trainers</h1>
        <div className="w-full flex flex-wrap pt-5 gap-4 gap-y-6">
          {trainers.map((item, index) => (
            <div key={index} className="border border-indigo-200 rounded-xl max-w-52 overflow-hidden cursor-pointer group hover:scale-95 transition-transform duration-200">
              <img className="h-[186px] w-[206px] object-cover" src={item.image} alt='' />
              <div className="p-4">
                <p className="text-neutral-800 text-lg font-medium">{item.name}</p>
                <p className="text-zinc-600 text-sm ">{item.speciality}</p>
                <div className="mt-2 flex items-center gap-1 text-sm"> 
                  <input onChange={() => changeAvailability(item._id)} type='checkbox' checked={item.available} />
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TrainersList;
