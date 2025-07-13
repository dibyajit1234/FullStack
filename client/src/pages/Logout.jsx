import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Logout=()=>{

    const {Logoutuser} = useAuth();


    useEffect(()=>{
        Logoutuser();
    },[Logoutuser]);
    return <Navigate to="/login"/>
    useEffect(() => {
    }, [])
    
}