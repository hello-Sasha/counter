import {useDispatch, useSelector}  from 'react-redux';
import todo from '../../store/actions/todo';
import { selectTodoList } from '../../store/selectors/todo';
import { Input } from './components/Input';
import { useState, useEffect } from "react";
import { DeleteButton } from './components/DeleteButton';
import './styles.css';


export const Todo = ()=>{
  const todoList = useSelector(selectTodoList);  
  const  dispatch = useDispatch();

  //const[fetchedData, setFetchedData]= useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((response)=>  dispatch(todo.fetchTodo(response)))
      //.then((response)=>setFetchedData(response));
  }, [])

  const [value, setValue] = useState('');  
  const [clickedItem, setClickedItem] = useState(null);  
  const [itemstatus, setItemStatus] = useState(null);  
  const [itemId, setItemId] = useState(null);  
  


  const onSave = ( ) =>{
    clickedItem === null ? 
        dispatch(todo.addTodo(value)) :
        dispatch(todo.editTodo({userId:itemId, id:clickedItem, title:value, completed: itemstatus}));
        setValue('');
        setClickedItem(null);
  };
  const edit =(item)=>{
    setClickedItem(item.id);
    setValue(item.title);
    setItemStatus(item.completed);
    setItemId(item.userId);
  };
  const completed = (item) =>{

    dispatch(todo.editTodo({userId:item.userId, id:item.id, title:item.title, completed: !item.completed}));

  }

return(
    <div>
        <Input value={value} setValue={setValue} />
        <button className="button" onClick={()=>onSave()} > Save </button>
        <br/>
        <ul className="taskItem">
          {
            todoList.slice(0,5).map( item => 
                <li key={item.id} >
                    User:{item.userId}, Title:{item.title}, Complited:{item.completed.toString()} 
                    <DeleteButton value={item.id} />
                    <button className="button" onClick={()=> edit(item)}>Edit</button>
                    <button className="button" onClick={()=> completed(item) }>completed</button>
                    
                </li> )
          }
        </ul>
        
    </div>
)


}