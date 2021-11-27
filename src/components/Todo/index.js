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
  const [itemstatus, setItemStatus] = useState(null);  
  

  const todoList = useSelector(selectTodoList);  
  const  dispatch = useDispatch();
  const onSave = ( ) =>{
    clickedItem === null ? 
        dispatch(todo.addTodo(value)) :
        dispatch(todo.editTodo({id:clickedItem, name:value, status: itemstatus}));
        setValue('');
        setClickedItem(null);
  };
  const edit =(item)=>{
    setClickedItem(item.id);
    setValue(item.name);
    setItemStatus(item.status);
  };
  const complited = (item) =>{

    dispatch(todo.editTodo({id:item.id, name:item.name, status:'complited'}));
    console.log(item);
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
                        {item.name} - {item.status} 
                        <DeleteButton value={item.id} />
                        <button className="button" onClick={()=> edit(item)}>Edit</button>
                        <button className="button" onClick={()=> complited(item) }>Complited</button>
                        
                    </li> )
            }
        </ul>
    </div>
)


}