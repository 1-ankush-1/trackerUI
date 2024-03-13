import { useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Form from "../../UI/Form";

const AddExpense = (props) => {
    const [expense, setExpense] = useState({
        amount: "",
        description: "",
        catogary: ""
    })

    const handleExpenseChange = (e) => {
        setExpense((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }

    const handleExpenseSubmitForm = (e) => {
        e.preventDefault();
        if (expense.amount === "" ||
            expense.description === "" ||
            expense.catogary === "") {
            alert("missing value amount ,desc or catograry");
            return;
        }
        // console.log(expense);
        props.onAddExpense(expense);
    }

    return (
        <Form onSubmit={handleExpenseSubmitForm}>
            <Input
                type="number"
                label="Amount"
                id="amount"
                name="amount"
                placeholder="enter amount"
                value={expense.amount}
                onChange={handleExpenseChange}
            />
            <Input
                type="text"
                label="Description"
                id="description"
                name="description"
                placeholder="enter description"
                value={expense.description}
                onChange={handleExpenseChange}
            />
            <div className="py-2">
                <label htmlFor="catogray" className="block text-gray-700 text-sm font-bold mb-2">Catograry</label>
                <select
                    type="text"
                    value={expense.catogary}
                    onChange={handleExpenseChange}
                    name="catogary"
                    id="catogary"
                    className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="petrol">Petrol</option>
                    <option value="movie">Movie</option>
                    <option value="rent">Rent</option>
                    <option value="shopping">Shopping</option>
                </select>
            </div>
            <Button type="submit">Add</Button>
        </Form>
    )
}

export default AddExpense;