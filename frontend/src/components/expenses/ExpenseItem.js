import { useState } from "react";
import "../../styles/expenses/expenseItem.css"
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";
import ExpenseOperation from "./ExpenseOperation";

const ExpenseItem = ({ expense }) => {
    const [name, setName] = useState(expense.name);
    const [price, setPrice] = useState(expense.price);
    return (
        <li>
            <Card className="expense-item" key={expense.name}>
                <ExpenseDate date={expense.date} />
                <ExpenseDetail name={name} price={price} LocationOfExpenditure={expense.LocationOfExpenditure} />
                <ExpenseOperation setName={setName} setPrice={setPrice} />
            </Card>
        </li>
    )
}

export default ExpenseItem;