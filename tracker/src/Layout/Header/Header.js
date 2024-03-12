import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                Header
            </div>
            <div>
                <Link to="/profile">profile</Link>
            </div>
        </header>
    )
}

export default Header;