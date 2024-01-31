
const ExpenseOperation = () => {
    const handelUpdateName = (e) => {
        e.preventDefault();
        console.log("deletion happen here")
    }
    
    const handelDeleteExpense = (e) => {
        e.preventDefault();
        console.log("deletion happen here")
    }

    return (
        <div>
            <button onClick={handelUpdateName}>changeTitle</button>
            <button onClick={handelDeleteExpense}>Delete</button>
        </div>
    )

}

export default ExpenseOperation;