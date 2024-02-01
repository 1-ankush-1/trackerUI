import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
    if (expenses.length === 0) {
        return <p>Only single Expense here. Please add more...</p>
    }

    return (
        <ul>
            {
                expenses.map(item => <ExpenseItem expense={item} key={item.id} />)
            }
        </ul>
    )
}

export default ExpenseList;