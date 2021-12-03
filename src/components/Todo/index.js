import { useDispatch, useSelector } from "react-redux";
import todo from "../../store/actions/todo";
import { selectTodoList } from "../../store/selectors/todo";
import { Input } from "./components/Input";
import { useState, useEffect } from "react";
import "./styles.css";
import { TodoDisplay } from "./components/TodoDisplay";

export const Todo = () => {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();

  //const[fetchedData, setFetchedData]= useState([]);
  useEffect(() => {
    dispatch(todo.fetchTodo());
  }, [dispatch]);

  const [value, setValue] = useState("");
  const [clickedItem, setClickedItem] = useState(null);

  const onSave = () => {
    if (!clickedItem) {
      dispatch(todo.addTodo(value));
    } else {
      dispatch(todo.editTodo({ ...clickedItem, title: value }));
    }
    setValue("");
    setClickedItem(null);
  };
  const edit = (item) => {
    setClickedItem(item);
    setValue(item.title);
  };
  const completed = (item) => {
    // dispatch(todo.editTodo({userId:item.userId, id:item.id, title:item.title, completed: !item.completed}));
    dispatch(todo.editTodo({ ...item, completed: !item.completed }));
  };

  return (
    <div>
      <Input value={value} setValue={setValue} />
      <button className="button" onClick={() => onSave()}>
        Save
      </button>
      <br />

      <TodoDisplay todoList={todoList} edit={edit} completed={completed} />
    </div>
  );
};
