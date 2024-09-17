/* eslint-disable react/prop-types */
import { createContext } from "react";
import { trainers } from '../assets/assets';
 
export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol = '$';

    const value = {
        trainers,
        currencySymbol
    }

    return (

        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;