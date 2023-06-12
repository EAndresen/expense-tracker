import "./ExpenseForm.css"
import React, {useState} from "react"

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    return (
        <form onSubmit={submitFormHandler}>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label>Title</label>
                    <input type={"text"}
                           value={enteredTitle}
                           onChange={tittleChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Amount</label>
                    <input type={"number"}
                           min={"0.01"}
                           step={"0.01"}
                           value={enteredAmount}
                           onChange={amountChangedHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Date</label>
                    <input type={"date"}
                           min={"2019-0-01"}
                           max={"2022-12-31"}
                           value={enteredDate}
                           onChange={dateChangedHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"button"}
                    onClick={props.stopEditing}>
                    Cancel
                </button>
                <button type={"submit"}>
                    Add Expense
                </button>
            </div>
        </form>
    )

    function tittleChangeHandler(event) {
        setEnteredTitle(event.target.value)
    }

    function amountChangedHandler(event) {
        setEnteredAmount(event.target.value)
    }

    function dateChangedHandler(event) {
        setEnteredDate(event.target.value)
    }

    function submitFormHandler(event) {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }
}

export default ExpenseForm