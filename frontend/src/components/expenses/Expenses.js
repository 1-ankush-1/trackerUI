import { useState } from "react";
import "../../styles/expenses/expenses.css"
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear())

    const HandleFilterExpense = (e) => {
        const year = e.target.value;
        setFilteredYear(Number(year));
    }

    const filteredExpense = expenses.filter((item) => {
        return item.date.getFullYear() === Number(filteredYear);
    })

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={HandleFilterExpense} />
            <ExpenseChart expenses={filteredExpense} />
            <ExpenseList expenses={filteredExpense} />
        </Card>
    )
}

export default Expenses;