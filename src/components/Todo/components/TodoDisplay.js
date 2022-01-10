import {  useState } from "react";
import { DeleteButton } from "./DeleteButton";
import { Pagination } from "./Pagination";
import "../styles.css";


const amountToShow = 35;

export const TodoDisplay = ({ todoList, edit, completed }) => {

  const [page, setPage] = useState(1);
  const listStart = amountToShow * (page - 1);
  const listEnd = amountToShow * page;
  return (
    <>
      <Pagination todoAmount={todoList.length} amountToShow={amountToShow} onClick={setPage} />

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
    </>
  );
};
