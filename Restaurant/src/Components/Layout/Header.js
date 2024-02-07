import Cart from "../Cart/Cart"
import "../../Styles/Layout/Header.css"

const Header = () => {
    return (
        <>
            <header className="nav">
                <div className="nav-head">
                    <h1>MealsMatters</h1>
                </div>
                <Cart />
            </header>
            <div className="main-img">
                <img src="" alt="mainImage"></img>
            </div>
        </>)
}

export default Header;