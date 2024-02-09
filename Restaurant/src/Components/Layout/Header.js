import "../../Styles/Layout/Header.css"
import CartButton from "../Cart/CartIcon";

const Header = () => {
    return (
        <>
            <header className="nav">
                <div className="nav-head">
                    <h1>MealsMatters</h1>
                </div>
                <CartButton />
            </header>
            <div className="main-img">
                <img src="" alt="mainImage"></img>
            </div>
        </>)
}

export default Header;