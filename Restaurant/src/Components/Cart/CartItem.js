const CartItem = (props) => {
    return (
        <li className="cart-item">
            <div className="cart-item-head">
                <h3>{props.name}</h3>
                <div className="item-head-content">
                    <span>{props.price}</span>
                    <span> x {props.amount}</span>
                </div>
            </div>
            <div>
                <div className="item-button-components">
                    <button onClick={props.onRemove}>-</button>
                    <button onClick={props.onAdd}>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem;