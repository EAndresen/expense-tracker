import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import React from "react";

function NewExpense() {
    return <div className={"new-expense"}>
        <ExpenseForm/>
    </div>
}

export default NewExpense