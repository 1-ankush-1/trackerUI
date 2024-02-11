import "../../style/components/cart.css"
import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import Modal from "../UI/Model";
import CartItems from "./CartItems";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    return (
        <Modal onClose={props.onClose} >
            <CartItems
                items={cartCtx.items}
                onAdd={cartCtx.addItem}
                onRemove={cartCtx.removeItem}
            />
            <div className="total-amt">
                <h2>Total Amount</h2>
                <h2>{totalAmount}</h2>
            </div>
            <div className="modal-btn-components">
                <button className="close-btn" onClick={props.onClose}>close</button>
                {hasItems && <button className="order-btn" >order</button>}
            </div>
        </Modal>
    )
}

export default Cart;