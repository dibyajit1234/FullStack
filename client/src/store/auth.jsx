import React, { createContext, use, useContext, useEffect } from 'react'
import { useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider=({children})=>{
    const [token, settoken] = useState(localStorage.getItem("token"));
    const [user, setuser] = useState("")
    const[service,setservice]=useState([]);
    const [isLoading, setisLoading] = useState(true)
    const authorizationToken = `Bearer ${token}`
    const storeTokenInLS =(serverToken)=>{
        settoken(serverToken);
        // userAuthentication();
        return localStorage.setItem("token",serverToken);
    }

    let isLoggedIn = !!token;
    // console.log("logged in : ",isLoggedIn);
    

    //tackling the logout functionality
    const Logoutuser=()=>{
        settoken("");
        return localStorage.removeItem("token")
    }
    //jwt authentication to get currently logged in user data
    const userAuthentication = async()=>{
        try {
            setisLoading(true);
            const response = await fetch("https://first-mern-backend-3jkq.onrender.com/api/auth/user",
                {
                    method:"GET",
                    headers:{
                        Authorization: authorizationToken
                    }
                }
            )
            if(response.ok){
                const data = await response.json();
                
                setuser(data.userData);
                setisLoading(false)
            }
        } catch (error) {
            console.log("Error fetching user data");
            
        }
    }
    
    
    //get service data
    const getService = async()=>{
        try {
            const response = await fetch("https://first-mern-backend-3jkq.onrender.com/api/data/service",{
                method:"GET"
            })
            if(response.ok){
                const data =await response.json();
                setservice(data.response);
            }else{
                console.log("error fetching user data");
                
                setservice(data.response);

            }
        } catch (error) {
            console.log('error fetching service data');
            
        }
    }
    useEffect(() => {
        
        userAuthentication();
        getService();
    }, []);
   

    return (
        <AuthContext.Provider value={{storeTokenInLS,Logoutuser,isLoggedIn,user,service,authorizationToken,isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside the provider");
    }
    return authContextValue;
}
