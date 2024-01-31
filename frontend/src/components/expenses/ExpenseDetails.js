const ExpenseDetail = (prop) => {
    return (
        <>
            <h2>{prop.name} </h2>
            <h2 >{prop.LocationOfExpenditure}</h2>
            <div className="expense-item__price">Rs {prop.price}</div>
        </>
    )

}

export default ExpenseDetail;