import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Store/authStore";

const Header = () => {
    const authCtx = useContext(AuthContext);
    return (
        <header>
            <div>
                Header
            </div>
            <div>
                <Link to="/profile">profile</Link>
            </div>
            <div>
                <div onClick={authCtx.onLogout}>Logout</div>
            </div>
        </header>
    )
}

export default Header;