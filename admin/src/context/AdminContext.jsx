/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
  const [trainers, setTrainers] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllTrainers = async () => {
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/all-trainers', {}, {headers: {aToken}});
      if(data.success) {
        setTrainers(data.trainers);
        console.log(data.trainers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const changeAvailability = async (docId) => {
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {docId}, {headers: {aToken}});
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

  const value = {
    aToken,
    setAToken,
    backendUrl,
    trainers,
    getAllTrainers,
    changeAvailability
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
