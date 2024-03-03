import { useContext } from "react";
import MedicineBody from "./MedicineBody";
import MedicineForm from "./MedicineForm";
import { CartContext } from "../../store/cartContext";
import { MedicineContext } from "../../store/medicineContext";

const Medicine = (props) => {
    const cartCtx = useContext(CartContext);
    const mediCtx = useContext(MedicineContext);
    const quantity = props.quantity;

    const handleAddAmount = (amount) => {
        if (!amount) {
            alert("no amount added")
            return
        }
        if (amount === 0 || quantity === 0 || Number(amount) > Number(quantity)) {
            alert(`${quantity} of medicines`);
            return;
        }

        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        }

        mediCtx.onMedicineQuantityChange({
            id: item.id,
            quantity: quantity - amount,
            action: "decrease"
        });

        cartCtx.addItem(item);
    }

    return (
        <li>
            <MedicineBody name={props.name} description={props.description} price={props.price} />
            {quantity > 0 &&
                (<div className="medicine-quantity-form">
                    <div className="medicine-quantity">
                        <label>Quantity</label>
                        <p>{quantity}</p>
                    </div>
                    <MedicineForm onAddAmount={handleAddAmount} maxBuy={quantity} />
                </div>)
            }
            {quantity <= 0 && <div className="medicine-left">No medicine left</div>}
        </li>
    )
}

export default Medicine;