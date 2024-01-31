
const ExpenseOperation = ({setName,setPrice}) => {
    const handelUpdateName = (e) => {
        e.preventDefault();
        setName("some data");
    }
    const handelUpdatePrice = (e) => {
        e.preventDefault();
        setPrice("100");
    }

    const handelDeleteExpense = (e) => {
        e.preventDefault();
        console.log("deletion happen here")
    }

    return (
        <div>
            <button onClick={handelUpdateName}>changeTitle</button>
            <button onClick={handelUpdatePrice}>change Amount</button>
            <button onClick={handelDeleteExpense}>Delete</button>
        </div>
    )

}

export default ExpenseOperation;