import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}){

    const isAuth = useSelector((state)=> state.auth.isAuthicated);

    return isAuth ? children : <Navigate to="/login"/>
}