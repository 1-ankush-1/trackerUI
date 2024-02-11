import "../../style/components/cart.css"
import { useContext, useState } from "react";
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
                <div className="cart-img-component">
                    <img src="../shopping-cart.png" alt="cart-icon" className="cart-icon"></img>
                </div>
                <div className="cart-count-component">
                    {/* <span>your cart</span> */}
                    <span>{numberOfCartItems}</span>
                </div>
            </div>
            {openModal && <Cart onClose={handleCloseModal} />}
        </>
    )
}

export default CartButton;