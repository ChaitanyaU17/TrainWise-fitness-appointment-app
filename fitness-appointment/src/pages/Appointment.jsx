// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedTrainers from "../components/RelatedTrainers";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazyload";
import axios from "axios";

const Appointment = () => {
  const { trainerId } = useParams();
  const { trainers, currencySymbol, backendUrl, token, getTrainersData } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [trainerInfo, setTrainerInfo] = useState(null);

  const [trainerSlots, setTrainerSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const navigate = useNavigate();

  const fetchTrainerInfo = async () => {
    const trainerInfo = trainers.find((trainer) => trainer._id === trainerId);
    setTrainerInfo(trainerInfo);
    // console.log(trainerInfo);
  };

  const getAvaliableSlots = async () => {
    if (!trainerInfo) return; // Ensure trainerInfo is available
  
    setTrainerSlots([]);
  
    let today = new Date();
  
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
  
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(24, 0, 0, 0);
  
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
  
      let timeSlots = [];
  
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
  
        const slotDate = `${day}_${month}_${year}`;
        const slotTime = formattedTime;
  
        // ✅ Check if slots_booked exists before accessing
        const isSlotAvailable =
          trainerInfo.slots_booked &&
          trainerInfo.slots_booked[slotDate] &&
          trainerInfo.slots_booked[slotDate].includes(slotTime)
            ? false
            : true;
  
        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }
  
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
  
      setTrainerSlots((prev) => [...prev, timeSlots]);
    }
  };
  

  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book appointment');
      return navigate('/login');
    }

    try {
      const date = trainerSlots[slotIndex][0].datetime;

      let day = date.getDate();
      let month = date.getMonth()+1;
      let year = date.getFullYear();

      const slotDate = day + "_" + month + "_" + year;

      const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {trainerId, slotDate, slotTime}, {headers: {token}});
      if (data.success) {
        toast.success(data.message);
        getTrainersData();
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchTrainerInfo();
  }, [trainers, trainerId]);

  useEffect(() => {
    getAvaliableSlots();
  }, [trainerInfo]);

  useEffect(() => {
    // console.log(trainerSlots);
  }, [trainerSlots]);

  // const handleBooking = () => {
  //   if (slotTime) {
  //     toast.success("Appointment booked successfully!");
  //   } else {
  //     toast.error("Please select a time slot.");
  //   }
  // };

  return (
    trainerInfo && (
      <div>
        {/* ------ trainer Details ----- */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div>
            <LazyLoad
              height={201} // Set height for LazyLoad placeholder
              offset={100} // Start loading image when it's 100px before coming into view
              once // Load only once when the image first becomes visible
              placeholder={<div className="bg-gray-300 h-[201px] w-full" />}
            >
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
              <LazyLoad
                height={201} // Set height for LazyLoad placeholder
                offset={100} // Start loading image when it's 100px before coming into view
                once // Load only once when the image first becomes visible
                placeholder={<div className="bg-gray-300 h-[201px] w-full" />}
              >
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

        {/* ---- Booking Slots --- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4 ">
            {trainerSlots.length &&
              trainerSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-50"
                  } `}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center w-full gap-3 mt-4 overflow-x-scroll pb-3">
            {trainerSlots.length &&
              trainerSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button
            onClick={bookAppointment}
            className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
          >
            Book an Appointment
          </button>
        </div>

        {/* --- listing related Trainers --- */}
        <RelatedTrainers
          trainerId={trainerId}
          speciality={trainerInfo.speciality}
        />
      </div>
    )
  );
};

export default Appointment;
