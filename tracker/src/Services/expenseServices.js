import { addDoc, collection } from "firebase/firestore";
import db from "../firebase.setup";

async function addExpense(expense) {
    try {
        const expenseRef = collection(db, "expenses");
        const docRef = await addDoc(expenseRef, expense);
        const id = docRef.id;
        return { data: { id, ...expense } };
    } catch (error) {
        console.log("Error adding expense data:", error.message);
        return { data: null };
    }
}


async function removeExpense() {
    try {

    } catch (error) {

    }
}

async function updateExpense() {
    try {

    } catch (error) {

    }
}

const expenseServices = {
    add: addExpense,
    delete: removeExpense,
    put: updateExpense,
}

export default expenseServices;