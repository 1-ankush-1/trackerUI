import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <table className="table-auto overflow-x-scroll shadow-lg w-screen">
            <thead className="table-header-group bg-gray-800 text-white">
                <tr className="table-row">
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Operations</th>
                </tr>
            </thead>
            <tbody className="table-row-group">
                {props.expenses.length <= 0 && <tr><td colSpan="3" className="px-4 py-2">No expense found</td></tr>}
                {props.expenses.length > 0 && props.expenses.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            onRemoveExpense={props.onRemoveExpense}
                            onUpdateExpense={props.onUpdateExpense}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default Expenses;