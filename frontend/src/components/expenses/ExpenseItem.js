import "../../styles/expenses/expenses.css"
import "../../styles/expenses/expenseItem.css"
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";
import ExpenseOperation from "./ExpenseOperation";

const ExpenseItem = ({ expenses }) => {
    return (
        <Card className="expenses">
            {expenses.map(item => (
                <Card className="expense-item" key={item.name}>
                    <ExpenseDate date={item.date} />
                    <ExpenseDetail name={item.name} price={item.price} LocationOfExpenditure={item.LocationOfExpenditure} />
                    <ExpenseOperation />
                </Card>))
            }
        </Card>)
}

export default ExpenseItem;