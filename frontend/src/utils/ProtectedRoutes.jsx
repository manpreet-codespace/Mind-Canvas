import {Navigate } from "react-router-dom";

export const ProtectedRoutes=({children})=>{
    const user=true;
    return user?children:<Navigate to="/signin"/>

}


