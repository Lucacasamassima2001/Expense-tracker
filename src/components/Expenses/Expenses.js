import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = ({ expenses }) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  // derivare stato usando una let controllando che il valore inserito mostri gli altri nascosti
  // let filterInfoText = [2019, 2020, 2021, 2022]
  //   .filter((year) => year !== Number(filteredYear))
  //   .join(", ");

  const filterChangeYear = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeYear={filterChangeYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} year={filteredYear} />
      </Card>
    </>
  );
};

export default Expenses;
