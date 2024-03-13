import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Store/authStore";

const Header = () => {
    const authCtx = useContext(AuthContext);
    return (
        <header className="flex items-center justify-between bg-gray-800 text-white p-4 top-0 sticky">
            <div className="text-xl font-bold">Tracker</div>
            <div className="flex items-center">
                <div className="mr-4">
                    <NavLink
                        to="/expense"
                        className={({ isActive }) => {
                            return isActive ? "text-blue-500" : "text-blue-300 hover:text-blue-500"
                        }}
                    >
                        Expense
                    </NavLink>
                </div>
                <div className="mr-4">
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => {
                            return isActive ? "text-blue-500" : "text-blue-300 hover:text-blue-500"
                        }}
                    >
                        Profile
                    </NavLink>
                </div>
                <div>
                    <div onClick={authCtx.onLogout} className="text-blue-300 hover:text-blue-500 cursor-pointer">Logout</div>
                </div>
            </div>
        </header>
    )
}

export default Header;