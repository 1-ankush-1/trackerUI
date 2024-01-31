import "../styles/expenseItem.css"

const expenses = [{ name: "Food", price: 100, LocationOfExpenditure: "movie" },
{ name: "Petrol", price: 100, LocationOfExpenditure: "movie" },
{ name: "Movies", price: 100, LocationOfExpenditure: "movie" }]

const ExpenseItem = () => {
    return (
        <>
            <h1>Expense Items</h1>
            <ul>
                {expenses.map(item =>
                    <li className="expense-item">
                        <p>{item.name} </p>
                        <p className="expense-item__LocationOfExpenditureription">{item.LocationOfExpenditure}</p>
                        <p className="expense-item__price">Rs {item.price}</p>
                    </li>)}
            </ul>
        </>)
}

export default ExpenseItem;