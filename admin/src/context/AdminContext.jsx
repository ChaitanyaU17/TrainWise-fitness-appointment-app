/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
  const [trainers, setTrainers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData]= useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllTrainers = async () => {
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/all-trainers', {}, {headers: {aToken}});
      if(data.success) {
        setTrainers(data.trainers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const changeAvailability = async (trainerId) => {
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {trainerId}, {headers: {aToken}});
      if (data.success) {
        toast.success(data.message);
        getAllTrainers();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const getAllAppointments = async () => {
    try {
      const {data} = await axios.get(backendUrl + '/api/admin/appointments', {headers:{aToken}});
      if (data.success) {
        setAppointments(data.appointments);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const cancleAppointment = async (appointmentId) => {
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/cancle-appointment', {appointmentId}, {headers: {aToken}});

      if (data.success) {
        toast.success(data.message);
        getAllAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  const getDashData = async () => {
    try {
      const {data} = await axios.get(backendUrl + '/api/admin/dashboard', {headers: {aToken}});

      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const value = {
    aToken,
    setAToken,
    backendUrl,
    trainers,
    getAllTrainers,
    changeAvailability,
    appointments, setAppointments,
    getAllAppointments,
    cancleAppointment,
    dashData, setDashData, getDashData
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
