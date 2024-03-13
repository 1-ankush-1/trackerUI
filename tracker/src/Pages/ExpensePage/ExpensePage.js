import { useState } from "react";
import AddExpense from "../../Components/Expenses/AddExpense";
import Expenses from "../../Components/Expenses/Expenses";

const ExpensePage = () => {
    const [expenses, setExpenses] = useState([]);
    const addExpense = (expense) => {
        //create a random id 
        const generateRandomId = () => {
            return Math.floor(Math.random() * 1000);
        }
        const randomId = generateRandomId();
        expense.id = randomId;
        setExpenses((prev) => {
            return [expense, ...prev];
        })
    }
    const removeExpense = (id) => {
        setExpenses((prev) => {
            return prev.filter((expense) => {
                return Number(expense.id) !== Number(id);
            })
        })
    }
    const updateExpense = (newExpense) => {
        setExpenses((prev) => {
            return prev.filter((expense) => {
                if (Number(expense.id) !== Number(newExpense.id)) {
                    expense.amount = newExpense.amount;
                    expense.description = newExpense.description;
                    expense.catogary = newExpense.catogary;
                }
                return expense;
            })
        })
    }

    return (
        <>
            <AddExpense onAddExpense={addExpense} />
            <Expenses expenses={expenses} />
        </>
    )
}

export default ExpensePage;