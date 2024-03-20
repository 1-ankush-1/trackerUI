import { Route, Routes } from "react-router-dom";
import Profile from "../Pages/Profile/Profile";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import UserContextProvider from "../Store/userStore";
import ExpensePage from "../Pages/ExpensePage/ExpensePage";
import Home from "../Pages/HomePages/Home";

const UserRoutes = () => {
    return (
        <UserContextProvider>
            <Header />
            <Routes>
                <Route path="/" element={<main><Home /></main>}></Route>
                <Route path="/profile" element={<main>< Profile /></main>} />
                <Route path="/expense" element={<main>< ExpensePage /></main>} />
            </Routes>
            <Footer />
        </UserContextProvider>

    )
}

export default UserRoutes;