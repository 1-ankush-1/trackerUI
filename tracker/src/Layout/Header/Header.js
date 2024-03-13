import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Store/authStore";

const Header = () => {
    const authCtx = useContext(AuthContext);
    return (
        <header>
            <div>
                Header
            </div>
            <div>
                <NavLink to="/expense">Expense</NavLink>
            </div>
            <div>
                <NavLink to="/profile">profile</NavLink>
            </div>
            <div>
                <div onClick={authCtx.onLogout}>Logout</div>
            </div>
        </header>
    )
}

export default Header;