import React from 'react'
import CartItem from './CartItem'

const CartItems = (props) => {
    const cartItemRemoveHandler = id => {
        props.onRemove(id);
    }

    const cartItemAddHandler = item => {
        props.onAdd(item);
    }

    return (
        <ul className="cart-items">
            {
                props.items.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))
            }
        </ul>
    )
}

export default CartItems