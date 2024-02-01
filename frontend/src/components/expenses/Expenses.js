import { useEffect, useState } from "react";
import "../../styles/expenses/expenses.css"
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem"

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
            {filteredExpense.length === 0 ? <p>Only single Expense here. Please add more...</p> :
                filteredExpense.map(item => <ExpenseItem expense={item} key={item.id} />)
            }
        </Card>
    )
}

export default Expenses;