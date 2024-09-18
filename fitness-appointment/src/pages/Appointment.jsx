
const Appointment = () => {
  return (
    <div>
       <div>
        {/* ------ trainer Details ----- */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div>
            <LazyLoad>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={trainerInfo.image}
              alt=""
            />
            </LazyLoad>
          </div>
          <div className="flex1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* -----trainer Info = name, degree, experience ----- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {trainerInfo.name}{" "}
              <LazyLoad>
              <img className="w-5" src={assets.verified_icon} alt="" />
              </LazyLoad>
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {trainerInfo.degree} - {trainerInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {trainerInfo.experience}
              </button>
            </div>
            {/* ---- trainer About ----- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {trainerInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {trainerInfo.fees}
              </span>
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Appointment;
