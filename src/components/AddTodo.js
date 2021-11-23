import {useDispatch, useSelector}  from 'react-redux';
import todo from '../store/actions/todo';
import { selectTodoList } from '../store/selectors/todo';
import { Input } from './Input';
import { useState } from "react";
import { DeleteButton } from './DeleteButton';
import './AddTodo.css';
import { EditTodo } from './EditTodo';


export const AddTodo =()=>{

  const [value, setValue] = useState('');  
  const [clickedItem, setClickedItem] = useState('');  
  const todoList = useSelector(selectTodoList);  
  const  dispatch = useDispatch();
  const addNewTask= () =>{
    dispatch(todo.addTodo(value))
  };

  const [visible, setVisible] = useState(false); 
  const edit = ()=>{
    setVisible(!visible)
  }

return(
    <div>
        <Input value={value} setValue={setValue} />
        <button className="button" onClick={addNewTask} > Add Task</button>
        <br/>
        <ul className="taskItem">
            {
                todoList.map( item => 
                    <li key={item} >
                        {item} 
                        <DeleteButton value={item} />
                        <button className="button" onClick={()=>{setClickedItem(item); edit()}}>Edit</button>
                        <EditTodo 
                            clickedItem={clickedItem}
                            todoItem={item} 
                            visible={visible}
                            setVisible={setVisible}
                        />  
                    </li> )
            }
        </ul>
    </div>
)


}