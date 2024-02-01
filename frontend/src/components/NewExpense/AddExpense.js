import ExpenseForm from "./ExpenseForm";

const AddExpense = ({ SetAllExpense }) => {

    return (
        <div>
            <ExpenseForm SetAllExpense={SetAllExpense} />
        </div>
    )
}

export default AddExpense;