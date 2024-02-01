import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpense = ({ SetAllExpense }) => {
    const [formShow, setShowForm] = useState(false);
    const handleShowForm = () => {
        setShowForm((prev) => {
            return !prev;
        });
    }
    return (
        <div>
            {formShow ? <ExpenseForm SetAllExpense={SetAllExpense} OnChangeShowForm={handleShowForm}/> : <button onClick={handleShowForm}>Add New Expense</button>}
        </div>
    )
}

export default AddExpense;