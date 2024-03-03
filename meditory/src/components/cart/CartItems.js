import "../../style/components/cart.css"
import React, { useContext } from 'react'
import CartItem from './CartItem'
import { MedicineContext } from "../../store/medicineContext";

const CartItems = (props) => {
    const mediCtx = useContext(MedicineContext);

    const cartItemRemoveHandler = id => {
        mediCtx.onMedicineQuantityChange({
            id: id,
            action: "increase"
        })
        props.onRemove(id);
    }

    const cartItemAddHandler = item => {
        const medicine = mediCtx.medicines.find(med => med.id === item.id);
        console.log(mediCtx.medicines)
        if (!medicine || Number(medicine.quantity) < 1) {
            alert("No medicine left");
            return;
        }

        console.log(medicine)

        mediCtx.onMedicineQuantityChange({
            id: medicine.id,
            quantity: medicine.quantity - 1,
            action: "decrease"
        })

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