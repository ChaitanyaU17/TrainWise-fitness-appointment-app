/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [trainers, setTrainers] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const [userData, setUserData] = useState(false) 

    // Getting trainers using API
    const getTrainersData = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/trainer/list');
             
            if (data.success) {
                setTrainers(data.trainers)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

  // Getting User Profile using API
  const loadUserProfileData = async () => {

    try {

        const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })

        if (data.success) {
            setUserData(data.userData)
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }

}

useEffect(() => {
    getTrainersData()
}, [])

useEffect(() => {
    if (token) {
        loadUserProfileData()
    } else {
        setUserData(false);
    }
}, [token])

    const value = {
        trainers, getTrainersData,
        currencySymbol,
        backendUrl,
        token, setToken,
        userData, setUserData, loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider