import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = { expenses: [], totalExpenses: 0, isPremiumUser: false }

const expenseSlice = createSlice({
    name: "expense",
    initialState: initialExpenseState,
    reducers: {
        add: (state, action) => {
            state.expenses.unshift(action.payload.expense);
            state.totalExpenses = state.totalExpenses + action.payload.expense.amount;
            if (state.totalExpenses >= 10000) {
                state.isPremiumUser = true;
            }
        },
        update: (state, action) => {
            state.expenses = state.expenses.map((expense) => {
                if (expense.id === action.payload.expense.id) {
                    expense.amount = action.payload.expense.amount;
                    expense.description = action.payload.expense.description;
                    expense.category = action.payload.expense.category;
                }
                return expense;
            });

            state.totalExpenses = state.expenses.reduce((total, expense) => total + expense.amount, 0);
            if (state.totalExpenses >= 10000) {
                state.isPremiumUser = true;
            }
        },
        remove: (state, action) => {
            const idx = state.expenses.findIndex((expense) => expense.id === action.payload.id);
            if (idx !== -1) {
                const removedExpense = state.expenses[idx];
                state.totalExpenses -= removedExpense.amount;
                state.expenses.splice(idx, 1);
                if (state.totalExpenses < 10000) {
                    state.isPremiumUser = false;
                }
            }
        }
    }
})

export const expenseAction = expenseSlice.actions;
export default expenseSlice.reducer;