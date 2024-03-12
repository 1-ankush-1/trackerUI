import { Route, Routes } from "react-router-dom";
import Profile from "../Pages/Profile/Profile";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import UserContextProvider from "../Store/userStore";

const UserRoutes = () => {
    return (
        <UserContextProvider>
            <Header />
            <Routes>
                <Route path="/profile" element={<main>< Profile /></main>} />
            </Routes>
            <Footer />
        </UserContextProvider>

    )
}

export default UserRoutes;