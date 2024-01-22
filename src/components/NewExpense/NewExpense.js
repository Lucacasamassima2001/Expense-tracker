import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

export default function NewExpense(props) {
  const [dropdown, setDropDown] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <>
      <div className="new-expense">
        <ExpenseForm
          dropdown={dropdown}
          onChangeDropdown={setDropDown}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    </>
  );
}
