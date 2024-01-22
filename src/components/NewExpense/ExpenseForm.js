import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // soluzione con 3 state
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  // soluzione con uno state && spred operator
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const inputChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
  // };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // passare la funzione del componente padre tramite props
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    props.onChangeDropdown(false);
  };

  function handleCancel() {
    props.onChangeDropdown(false);
  }

  function handleOpen() {
    props.onChangeDropdown(true);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <>
      {props.dropdown === false ? (
        <button onClick={handleOpen}>Add New Expense</button>
      ) : (
        <form onSubmit={submitHandler}>
          <div>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input
                  value={enteredTitle}
                  type="text"
                  name="enteredTitle"
                  onChange={titleChangeHandler}
                />
              </div>
              <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input
                  value={enteredAmount}
                  type="number"
                  name="enteredAmount"
                  min="0.01"
                  step="0.01"
                  onChange={amountChangeHandler}
                />
              </div>
              <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input
                  value={enteredDate}
                  name="enteredDate"
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  onChange={dateChangeHandler}
                />
              </div>
            </div>
            <div className="new-expense__actions">
              <button
                onClick={handleCancel}
                type="submit"
                className="new-expense__actions"
              >
                Cancel
              </button>
              <button type="submit" className="new-expense__actions">
                Add Expense
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
