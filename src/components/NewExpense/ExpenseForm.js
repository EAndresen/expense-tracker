import "./ExpenseForm.css"
import {useState} from "react";

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')

    return (
        <form>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label>Title</label>
                    <input type={"text"}
                           onChange={tittleChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Amount</label>
                    <input type={"number"}
                           min={"0.01"}
                           step={"0.01"}
                           onChange={amountChangedHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Date</label>
                    <input type={"date"}
                           min={"2019-0-01"}
                           max={"2022-12-31"}
                           onChange={dateChangedHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"submit"}
                        onClick={submitFormHandler}>
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

    function submitFormHandler() {
        console.log(enteredTitle, enteredAmount, enteredDate)
    }
}

export default ExpenseForm