import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PlusCircleIcon from "bootstrap-icons/icons/plus-circle-fill.svg";
import MinusCircleIcon from "bootstrap-icons/icons/dash-circle-fill.svg";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-plus-circle-fill text-success cursor"
          viewBox="0 0 16 16"
          onClick={(event) => increaseAllocation(props.name)}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
      </td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-dash-circle-fill text-danger cursor"
          viewBox="0 0 16 16"
          onClick={handleDeleteExpense}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
        </svg>
      </td>
    </tr>
  );
};

export default ExpenseItem;
