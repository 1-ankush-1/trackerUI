import ExpenseItem from "./ExpenseItem";
import "../../styles//expenses/expenseList.css"

const ExpenseList = ({ expenses }) => {
    if (expenses.length === 0) {
        return <p className="expenses-list__fallback">Only single Expense here. Please add more...</p>
    }

    return (
        <ul className="expenses-list">
            {
                expenses.map(item => <ExpenseItem expense={item} key={item.id} />)
            }
        </ul>
    )
}

export default ExpenseList;