import { useState } from "react";

const ExpenseForm = ({ SetAllExpense, OnChangeShowForm }) => {
    const [expense, setExpense] = useState({
        name: "",
        price: "",
        date: "",
    });

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setExpense({ ...expense, [name]: value });
    }

    const handleAddExpense = (e) => {
        e.preventDefault();
        SetAllExpense((prev) => {
            const newexpense = expense;
            newexpense.id = Math.random() + newexpense.name;
            newexpense.date = new Date(newexpense.date)
            return [newexpense, ...prev];
        })
        setExpense({
            name: "",
            price: "",
            date: "",
        })
        OnChangeShowForm();
    }

    return (
        <form onSubmit={handleAddExpense} id="addExpenseForm">
            <label htmlFor="name">Title</label>
            <input id="name" name="name" value={expense.name} onChange={handleInputChange}></input>
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="price" type="number" min={0.00} value={expense.price} onChange={handleInputChange}></input>
            <label htmlFor="date">Date</label>
            <input id="date" name="date" type="date" value={expense.date.toLocaleString()} onChange={handleInputChange}></input>
            <button onClick={OnChangeShowForm} type="button">Cancel</button>
            <button type="submit"> AddExpense</button>
        </form>
    )
}

export default ExpenseForm;