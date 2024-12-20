/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */


import { useState, createContext } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')

  

  const value = {
    aToken,
    setAToken,
    backendUrl,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
