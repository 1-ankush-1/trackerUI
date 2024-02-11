import { useContext } from "react";
import MedicineBody from "./MedicineBody";
import MedicineForm from "./MedicineForm";
import { CartContext } from "../../store/cartContext";

const Medicine = (props) => {
    const cartCtx = useContext(CartContext);

    const handleAddAmount = (amount) => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        }
        cartCtx.addItem(item);
    }
    
    return (
        <li>
            <MedicineBody name={props.name} description={props.description} price={props.price} />
            <MedicineForm onAddAmount={handleAddAmount} />
        </li>
    )
}

export default Medicine;