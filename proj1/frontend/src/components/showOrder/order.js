import { useContext } from "react";
import { orderContext } from "../../store/order";
import "../../styles/showOrder/order.css"

const Order = (props) => {
    const odrCtx = useContext(orderContext)

    const handleOrder = (id) => {
        odrCtx.onOrderRemove(id)
    }

    return (
        <div key={props.id} className="order">
            <div className="order-field">{props.name}</div>
            <div className="order-field">₹{props.price}</div>
            <div className="order-operation">
                <button className="order-operation-btn" onClick={() => handleOrder(props.id)}>🗑️</button>
            </div>
        </div>)
}

export default Order;