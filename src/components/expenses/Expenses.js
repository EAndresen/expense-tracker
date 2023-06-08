import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"

function Expenses(props) {
    return (
        <Card className={"expenses"}>
            {props.expenses.map((item) => {
                return (
                    <ExpenseItem
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