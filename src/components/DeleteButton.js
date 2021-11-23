
import {useDispatch}  from 'react-redux';
import todo from '../store/actions/todo';
import './AddTodo.css';


export const DeleteButton =({value})=>{

    const  dispatch = useDispatch(); 
    const deleteTask = ()=> {
        dispatch(todo.deleteTodo(value));
    }
    return(
        <button className="button" onClick={deleteTask}>
            Delete
        </button>
    )
}