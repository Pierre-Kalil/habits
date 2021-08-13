import { createContext, useState } from "react";
import jwt_decode from 'jwt-decode';
import { useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState('');
    const getToken = (token) => {
        const id = jwt_decode(token)
        setUser(JSON.stringify(id.user_id))
    }


    return (
        <UserContext.Provider value ={{user, getToken}}>
            {children}
        </UserContext.Provider>

    )

}

export const useUser = () => useContext(UserContext);