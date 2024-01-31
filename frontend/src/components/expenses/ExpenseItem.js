import "../../styles/expenses/expenses.css"
import "../../styles/expenses/expenseItem.css"
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";

const ExpenseItem = ({ expenses }) => {
    return (
        <Card className="expenses">
            {expenses.map(item =>(
            <Card className="expense-item" key={item.name}>
                <ExpenseDate date={item.date} />
                <ExpenseDetail name={item.name} price={item.price} LocationOfExpenditure={item.LocationOfExpenditure} />
            </Card>))
            }
        </Card>)
}

export default ExpenseItem;