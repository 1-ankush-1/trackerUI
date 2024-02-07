import { useState } from "react";
import "../../Styles/Cart/Cart.css"
import Modal from "../UI/Model";

const Cart = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    return (
        <>
            <div className="cart" onClick={handleOpenModal}>
                <div>
                    <img src="" alt="cart-icon"></img>
                </div>
                <div>
                    <p>your cart</p>
                </div>
                <div>{0}</div>
            </div>
            {openModal && <Modal onCloseModal={handleCloseModal} />}
        </>
    )
}

export default Cart;