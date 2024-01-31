import "../../styles/expenses/expenses.css"
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem"

const Expenses = ({ expenses }) => {
    return (
        <Card className="expenses">
            {expenses.map(item => <ExpenseItem expense={item} />)}
        </Card>)
}

export default Expenses;