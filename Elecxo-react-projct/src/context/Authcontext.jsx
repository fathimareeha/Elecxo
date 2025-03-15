import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const login = (name,password) => {
        const newUser ={name,password}
        
        setUser(newUser)
        navigate('/')
    };

    const signup = (name, password) => {
        const newUser = { name, password };
        console.log(
            newUser
        );
        
        setUser(newUser);
navigate('/')
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
