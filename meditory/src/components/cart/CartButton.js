import "../../style/components/cart.css"
import { useContext, useState } from "react";
import CartItems from "./CartItems";
import { CartContext } from "../../store/cartContext";


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
            {openModal && <CartItems onClose={handleCloseModal} />}
        </>
    )
}

export default CartButton;