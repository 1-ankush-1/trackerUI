import { NavLink } from "react-router-dom";
import SunIcon from "../../icon/sun";
import MoonIcon from "../../icon/night";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../../redux/slices/theme";
import { authAction } from "../../redux/slices/auth";

const Header = () => {
    const dispatch = useDispatch();
    const isPremiumUser = useSelector(state => state.expense.isPremiumUser);
    const isDarkMode = useSelector(state => state.theme.isDark);

    const handleChangeTheme = () => {
        dispatch(themeAction.changeMode());
    }

    const logoutUser = ()=>{
        dispatch(authAction.logout());
    }

    return (
        <header className="flex items-center justify-between bg-gray-800 text-white p-4 top-0 sticky">
            <div className="flex text-xl font-bold gap-2">
                Tracker
                {isPremiumUser &&
                    <>
                        {isDarkMode ?
                            <div className="cursor-pointer" onClick={handleChangeTheme} title="light mode">
                                <SunIcon />
                            </div>
                            :
                            <div className="cursor-pointer" onClick={handleChangeTheme} title="dark mode">
                                <MoonIcon />
                            </div>
                        }
                    </>
                }
            </div>
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
                    <div onClick={logoutUser} className="text-blue-300 hover:text-blue-500 cursor-pointer">Logout</div>
                </div>
            </div>
        </header>
    )
}

export default Header;