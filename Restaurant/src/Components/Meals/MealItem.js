import { useContext } from "react";
import MealForm from "./MealForm";
import { CartContext } from "../../store/cartContext";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    };

    return (
        <li className="meal" >
            <div className="meal-item">
                <h3 className="item-name">{props.name}</h3>
                <p className="item-desc">{props.description}</p>
                <div className="item-price">{`₹${props.price}`}</div>
            </div>
            <MealForm onAddToCart={addToCartHandler} />
        </li>
    )
}

export default MealItem;