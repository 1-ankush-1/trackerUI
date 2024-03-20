import { Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import { AuthContext } from "../Store/authStore";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Router = () => {
    // const authCtx = useContext(AuthContext);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <Routes>
            <Route path="/auth/*" element={!isAuthenticated ? <AuthRoutes /> : <Navigate to="/" replace />} />
            <Route path="/*" element={isAuthenticated ? <UserRoutes /> : <Navigate to="/auth/login" replace />} />
        </Routes>
    )
}

export default Router;