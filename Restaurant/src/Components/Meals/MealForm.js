import { useState } from "react"

const MealForm = () => {
    const [amount, setAmount] = useState(0);

    const onChangeInput = (e) => {
        setAmount(e.target.value)
    }

    const handleMealFormSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleMealFormSubmit} className="meal-form">
            <div className="input-component">
                <label htmlFor="meal-amount">Amount</label>
                <input id="meal-amount" type="text" name="amount" min="0" value={amount} onChange={onChangeInput} />
            </div>
            <button type="submit">
                <span>+</span>
                <span>Add</span>
            </button>
        </form>
    )
}

export default MealForm;