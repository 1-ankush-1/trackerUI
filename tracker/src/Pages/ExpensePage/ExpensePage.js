import { useEffect, useState } from "react";
import AddExpense from "../../Components/Expenses/AddExpense";
import Expenses from "../../Components/Expenses/Expenses";
import expenseServices from "../../Services/expenseServices";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase.setup";

const ExpensePage = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        // Subscribe to database updates
        const unsubscribe = onSnapshot(collection(db, "expenses"), async (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const expenseData = change.doc.data();
                if (change.type === "added") {
                    setExpenses((prev) => {
                        return [{ id: change.doc.id, ...expenseData }, ...prev];
                    })
                } else if (change.type === "modified") {
                    console.log("updating item", { id: change.doc.id, ...expenseData });
                    setExpenses((prev) => {
                        return prev.filter((expense) => {
                            if (Number(expense.id) !== Number(change.doc.id)) {
                                expense.amount = expenseData.amount;
                                expense.description = expenseData.description;
                                expense.catogary = expenseData.catogary;
                            }
                            return expense;
                        })
                    })
                } else if (change.type === "removed") {
                    console.log("called", expenseData);
                    const deletedExpenseId = change.doc.id;
                    setExpenses((prev) => {
                        return prev.filter((expense) => {
                            return Number(expense.id) !== Number(deletedExpenseId);
                        })
                    })
                }
            });
        });

        // Clean up subscription
        return () => {
            unsubscribe();
        };
    }, []);

    const addExpense = async (expense) => {
        await expenseServices.add(expense);
    }

    const removeExpense = async (id) => {
        await expenseServices.delete(id);
    }

    const updateExpense = async (newExpense) => {
        await expenseServices.put(newExpense);
    }

    return (
        <>
            <AddExpense onAddExpense={addExpense} />
            <Expenses expenses={expenses} />
        </>
    )
}

export default ExpensePage;