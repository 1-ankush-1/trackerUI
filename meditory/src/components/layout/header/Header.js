import "../../../style/header/header.css"
import CartButton from "../../cart/CartButton";

const Header = () => {
    return (
        <header className="navbar">
            <div className="nav-head">
                <h1>MediTory</h1>
            </div>
            <CartButton />
        </header>
    )
}

export default Header;