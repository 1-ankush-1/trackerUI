import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
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


async function removeExpense(id) {
    try {
        const cartRef = doc(db, "expenses", id);
        await deleteDoc(cartRef);
        return { data: null };
    } catch (error) {
        console.log(error.message);
        return { data: null };
    }
}

async function updateExpense(newExpense) {
    try {
        console.log("udapted", newExpense)
        const { id, ...toUpdateExpense } = newExpense
        console.log(id, toUpdateExpense)
        const cartRef = doc(db, "expenses", id);
        await updateDoc(cartRef, toUpdateExpense);
        return { data: true };
    } catch (error) {
        console.log(error.message);
        return { data: false };
    }
}

const expenseServices = {
    add: addExpense,
    delete: removeExpense,
    put: updateExpense,
}

export default expenseServices;