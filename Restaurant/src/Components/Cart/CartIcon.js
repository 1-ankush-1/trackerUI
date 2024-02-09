import { useContext, useState } from "react";
import "../../Styles/Cart/Cart.css"
import { CartContext } from "../../store/cartContext";
import Cart from "./Cart";

const CartButton = () => {
    const cartCtx = useContext(CartContext);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + Number(item.amount);
    }, 0)

    return (
        <>
            <div className="cart" onClick={handleOpenModal}>
                <div>
                    <img src="" alt="cart-icon"></img>
                </div>
                <div>
                    <p>your cart</p>
                </div>
                <div>{numberOfCartItems}</div>
            </div>
            {openModal && <Cart onClose={handleCloseModal} />}
        </>
    )
}

export default CartButton;