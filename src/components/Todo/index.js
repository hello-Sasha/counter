import {useDispatch, useSelector}  from 'react-redux';
import todo from '../../store/actions/todo';
import { selectTodoList } from '../../store/selectors/todo';
import { Input } from './components/Input';
import { useState } from "react";
import { DeleteButton } from './components/DeleteButton';
import './styles.css';


export const Todo = ()=>{

  const [value, setValue] = useState('');  
  const [clickedItem, setClickedItem] = useState(null);  
  

  const todoList = useSelector(selectTodoList);  
  const  dispatch = useDispatch();
  const onSave = () =>{
    clickedItem === null ? 
    dispatch(todo.addTodo(value)) :
    dispatch(todo.editTodo({id:clickedItem, name:value}))
  };
  const edit =(item)=>{
     setClickedItem(item.id);
     setValue(item.name) ;
  }

return(
    <div>
        <Input value={value} setValue={setValue} />
        <button className="button" onClick={()=>onSave()} > Save </button>
        <br/>
        <ul className="taskItem">
            {
                todoList.map( item => 
                    <li key={item.id} >
                        {item.name} 
                        <DeleteButton value={item.id} />
                        <button className="button" onClick={()=> edit(item)}>Edit</button>
                        
                    </li> )
            }
        </ul>
    </div>
)


}