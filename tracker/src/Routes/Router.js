import { Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../UI/Notification";
import { notificationAction } from "../redux/slices/notification";

const Router = () => {
    // const authCtx = useContext(AuthContext);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        function clearNotificationAfterCertainTime() {
            dispatch(notificationAction.clearNotification());
        }
        const timer = setTimeout(() => {
            clearNotificationAfterCertainTime();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [notification.status, dispatch]);

    return (
        <>
            {notification.status !== "" && <Notification status={notification.status} message={notification.message} title={notification.title} />}
            <Routes>
                <Route path="/auth/*" element={!isAuthenticated ? <AuthRoutes /> : <Navigate to="/" replace />} />
                <Route path="/*" element={isAuthenticated ? <UserRoutes /> : <Navigate to="/auth/login" replace />} />
            </Routes>
        </>
    )
}

export default Router;