import "../styles/expenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";

const ExpenseItem = ({ expenses }) => {
    return (
        <>
            <h1>Expense Items</h1>
            <ul>
                {expenses.map(item =>
                (<li className="expense-item" key={item.name}>
                    <ExpenseDate date={item.date} />
                    <ExpenseDetail name={item.name} price={item.price} LocationOfExpenditure={item.LocationOfExpenditure} />
                </li>))}
            </ul>
        </>)
}

export default ExpenseItem;