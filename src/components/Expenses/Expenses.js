import Card from "../UI/Card"
import React, {useState} from "react"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020")
    const filteredItems = filterItems(props)

    return (
        <div>
            <Card className={"expenses"}>
                <ExpensesFilter
                    selected={filteredYear}
                    onFilteredYear={filterYearHandler}
                />
                <ExpensesChart expenses={filteredItems} />
                <ExpensesList items={{filteredItems}} />
            </Card>
        </div>
    )

    function filterYearHandler(year) {
        setFilteredYear(year)
    }

    function filterItems(props) {
        return props.expenses.filter (function (item) {
            return item.date.getFullYear().toString() === filteredYear
        })
    }
}

export default Expenses