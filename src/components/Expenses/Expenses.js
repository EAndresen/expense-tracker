import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import React from "react"

function Expenses(props) {
    return (
        <Card className={"expenses"}>
            {props.expenses.map((item) => {
                return (
                    <ExpenseItem
                        key={Math.floor(Math.random() * 90000 + 10000)}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                    />
                )
            })}
        </Card>
    )
}

export default Expenses