import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/v1/"
const GlobalContext = React.createContext()
export const GlobalProvider = ({children}) => {

    const [income, SetInocme] = useState([])
    const [expense, SetExpense] = useState([])
    const [error, Seterror] = useState(null)

    const addInocme =  async(inocme) => {
        const response =  await axios.post(`${BASE_URL}add-income`,inocme)
        .catch((error) => {
            Seterror(error.response.data.message)
        })
    }

    return(
        <GlobalContext.Provider value={{
            addInocme,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}