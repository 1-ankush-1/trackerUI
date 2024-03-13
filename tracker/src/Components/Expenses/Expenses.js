const Expenses = (props) => {
    return (
        <div>
            {props.expenses.length <= 0 && "no expense found"}
            {props.expenses.length > 0 &&
                props.expenses.map((expense) => {
                    return (
                        <li key={expense.id}>
                            <h3>{expense.amount}</h3>
                            <h3>{expense.description}</h3>
                            <h3>{expense.catogary}</h3>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default Expenses;