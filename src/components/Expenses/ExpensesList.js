import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  return (
    <>
      {props.filteredExpenses.length > 0 ? (
        <ul className="expenses-list">
          {props.filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </ul>
      ) : (
        <h2 className="expenses-list__fallback">No expenses found</h2>
      )}
    </>
  );
}
