import { Fragment, useState } from "react";
import { DeleteButton } from "./DeleteButton";
import "../styles.css";

export const TodoDisplay = ({ todoList, edit, completed }) => {
  const todoAmount = todoList.length;
  const amountToShow = 35;
  const totalPages =
    todoAmount % amountToShow === 0
      ? todoAmount / amountToShow
      : Math.floor(todoAmount / amountToShow) + 1;

  const [page, setPage] = useState(1);

  const pagesArr = [...Array(totalPages).keys()].map((item) => item + 1);
  const pages = pagesArr.map((page) => (
    <button key={page} onClick={() => setPage(page)} className="button">
      {page}
    </button>
  ));

  const listStart = amountToShow * (page - 1);
  const listEnd = amountToShow * page;
  return (
    <Fragment>
      <div className="pagination">{pages}</div>

      <ul className="taskItem">
        {todoList.slice(listStart, listEnd).map((item) => (
          <li key={item.id}>
            <span>{todoList.indexOf(item) + 1} </span>
            User:{item.userId}, Title:{item.title}, Complited:
            {item.completed.toString()}
            <DeleteButton value={item.id} />
            <button className="button" onClick={() => edit(item)}>
              Edit
            </button>
            <button className="button" onClick={() => completed(item)}>
              completed
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
