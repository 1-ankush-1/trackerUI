import { useEffect, useState } from "react";
import "../../styles/expenses/expenses.css"
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem"

const Expenses = ({ expenses }) => {
    const [filteredExpense, SetFilteredExpense] = useState([]);

    useEffect(() => {
        SetFilteredExpense(expenses);
    }, [expenses])

    const HandleFilterExpense = (e) => {
        
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={new Date().getFullYear()} onChangeFilter={HandleFilterExpense} />
            {filteredExpense?.map(item => <ExpenseItem expense={item} key={item.id} />)}
        </Card>
    )
}

export default Expenses;