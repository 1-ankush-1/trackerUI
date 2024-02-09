import { useState } from "react"

const MealForm = (props) => {
    const [amount, setAmount] = useState(0);

    const onChangeInput = (e) => {
        const value = e.target.value;
        setAmount(value.trim())
    }

    const handleMealFormSubmit = (e) => {
        e.preventDefault();
        props.onAddToCart(amount);
        setAmount(0);
    }

    return (
        <form onSubmit={handleMealFormSubmit} className="meal-form">
            <div className="input-component">
                <label htmlFor="meal-amount">Amount</label>
                <input id="meal-amount" type="number" name="amount" min="1" max="5" value={amount} onChange={onChangeInput} />
            </div>
            <button type="submit">
                <span>+</span>
                <span>Add</span>
            </button>
        </form>
    )
}

export default MealForm;