import "../../style/components/cart.css"
const CartItem = (props) => {
    return (
        <li className="cart-item">
            <div className="cart-item-head">
                <h3>{props.item.name}</h3>
                <div className="item-head-content">
                    <span>{`₹${props.item.price}`}</span>
                    <span> x {props.item.amount}</span>
                </div>
            </div>
            <div>
                <div className="item-button-components">
                    <button onClick={() => props.onRemove(props.item.id)}>-</button>
                    <button onClick={() => props.onAdd(props.item)}>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem;