import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loading, setLoading] = useState(true);

    const API_URL = "http://localhost:5000/api/auth/";

useEffect(() => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else { 
        delete axios.defaults.headers.common["Authorization"]; 
    }
    setLoading(false);
}, [token]);

// Register user
const registeruser = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'register', userData);
        if (response.data) {
            localStorage.setItem("token", response.data.token);
            setToken(response.data.token);
            setUser(response.data);
        }
        return response.data;
    }
    catch (error) {
        console.error("Registration error:", error.response.data);
        throw error.response.data;
    }
};

const value = {
    user,
    token,
    registeruser,
    loading
};

return (
    <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
);
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;
