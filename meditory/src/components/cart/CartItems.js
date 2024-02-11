import "../../style/components/cart.css"
import React from 'react'
import CartItem from './CartItem'

const CartItems = (props) => {
    const cartItemRemoveHandler = id => {
        props.onRemove(id);
    }

    const cartItemAddHandler = item => {
        props.onAdd({ ...item, amount: 1 });
    }
   
    return (
        <ul className="cart-items">
            {
                props.items?.map(item => (
                    <CartItem
                        item={item}
                        key={item.id}
                        onRemove={cartItemRemoveHandler}
                        onAdd={cartItemAddHandler}
                    />
                ))
            }
        </ul>
    )
}

export default CartItems