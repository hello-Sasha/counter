import { useState } from "react";
import { Input } from "./Input";
import {useDispatch}  from 'react-redux';
import todo from '../store/actions/todo';
import './AddTodo.css';

export const EditTodo = ({todoItem, visible, setVisible, clickedItem})=>{
   
    const  dispatch = useDispatch();
    const [task, setTask] = useState('');  

    const changeTask= () =>{
        dispatch(todo.addTodo(task));
        dispatch(todo.deleteTodo(todoItem));
        
        setVisible(false);
    };
    const showItem = todoItem===clickedItem? true: false ; 

    if(visible && showItem){
        return(
            <div>
               <Input value={task} setValue={setTask}/>
                <button className="button" onClick={changeTask}>Save</button>
            </div>
        )
    } else {
        return '';
    }

}