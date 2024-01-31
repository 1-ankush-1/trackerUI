const expenses = [{ name: "Food", price: 100 },
{ name: "Petrol", price: 100 },
{ name: "Movies", price: 100 }]

const ExpenseItem = () => {
    return (
        <>
            <h1>Expense Items</h1>
            <ul>
                {expenses.map(item => <li>{`${item.name} Rs ${item.price}`}</li>)}
            </ul>
        </>)
}

export default ExpenseItem;