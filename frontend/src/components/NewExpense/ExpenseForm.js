import { useState } from "react";

const ExpenseForm = ({ SetAllExpense }) => {
    const [expense, setExpense] = useState({
        name: "",
        price: null,
        date: new Date()
    });

    const handleInputChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    }

    return (
        <form>
            <label htmlFor="name">Title</label>
            <input id="name" name="name" value={expense.name} onChange={handleInputChange}></input>
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="price" type="number" min={0.00} value={expense.price} onChange={handleInputChange}></input>
            <label htmlFor="date">Date</label>
            <input id="date" name="date" type="date" value={expense.date} onChange={handleInputChange}></input>
            <button > AddExpense</button>
        </form>
    )
}

export default ExpenseForm;