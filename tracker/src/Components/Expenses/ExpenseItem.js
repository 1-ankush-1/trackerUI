import { useState } from "react";

const ExpenseItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [expense, setExpense] = useState(props.expense);

    const handleUpdate = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Perform the update logic here
        // Update the expense state and save the data
        // console.log(expense)
        props.onUpdateExpense(expense);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value
        }));
    };

    return (
        <>
            {isEditing ? (
                <tr className="table-row text-center py-2">
                    <input id="id" value={expense.id} hidden />
                    <td >
                        <select
                            type="text"
                            value={expense.catogary}
                            onChange={handleInputChange}
                            name="catogary"
                            id="catogary"
                            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="petrol">Petrol</option>
                            <option value="movie">Movie</option>
                            <option value="rent">Rent</option>
                            <option value="shopping">Shopping</option>
                        </select>
                    </td>
                    <td >
                        <input
                            type="text"
                            label="Description"
                            id="description"
                            name="description"
                            placeholder="enter description"
                            value={expense.description}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </td>
                    <td >
                        <input
                            type="number"
                            label="Amount"
                            id="amount"
                            name="amount"
                            placeholder="enter amount"
                            value={expense.amount}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </td>
                    <td className="flex items-center justify-center gap-2">
                        <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                        <button onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </td>
                </tr>
            ) : (
                <tr className="text-center py-2">
                    <td>{expense.catogary}</td>
                    <td className="text-nowrap">{expense.description}</td>
                    <td>{`₹${Number(expense.amount).toFixed(2)}`}</td>
                    <td className="flex items-center justify-center gap-2">
                        <button onClick={handleUpdate} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Update
                        </button>
                        <button onClick={() => props.onRemoveExpense(props.expense.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                    </td>
                </tr>
            )
            }
        </>
    );
};

export default ExpenseItem;