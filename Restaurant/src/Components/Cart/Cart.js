import "../../Styles/Cart/Cart.css"
import Modal from "../UI/Model";

const Cart = () => {

    return (
        <>
            <div className="cart">
                <div>
                    <img src="" alt="cart-icon"></img>
                </div>
                <div>
                    <p>your cart</p>
                </div>
                <div>{0}</div>
            </div>
            <Modal />
        </>
    )
}

export default Cart;