import "./ExpenseFilter.css";
export default function ExpenseFilter(props) {
  const dropdownChangeHnadler = (e) => {
    props.onChangeYear(e.target.value);
  };
  return (
    <>
      <div className="expense-filter">
        <div className="expenses-filter__control">
          <label>Filter by Year</label>
          <select value={props.selectedYear} onChange={dropdownChangeHnadler}>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
          </select>
        </div>
      </div>
    </>
  );
}
