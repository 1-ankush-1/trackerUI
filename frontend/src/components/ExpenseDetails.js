const ExpenseDetail = (prop) => {
    return (
        <>
            <p>{prop.name} </p>
            <p className="expense-item__LocationOfExpenditureription">{prop.LocationOfExpenditure}</p>
            <p className="expense-item__price">Rs {prop.price}</p>
        </>
    )

}

export default ExpenseDetail;