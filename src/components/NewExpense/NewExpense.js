import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import React from "react";

function NewExpense(props) {
    return <div className={"new-expense"}>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
}

export default NewExpense