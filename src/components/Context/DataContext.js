import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios("products.json").then((res) => setData(res.data))
    },[])

    return <dataContext.Provider value={{data, setData}}>{children}</dataContext.Provider>
    
}

export default DataProvider;