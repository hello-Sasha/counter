import {useState} from 'react';
import { Input } from '../components/Todo/components/Input';
import todo from '../store/actions/todo';
import { useDispatch } from 'react-redux';

export const Login =()=>{
    const qs= require('qs');
    const  dispatch = useDispatch();
    const [userName, setUserName]=useState('');
    const[password, setPassword]=useState('');
    const loginFunc=()=>{
        const data = qs.stringify({
            'username':`${userName}`,
            'password':`${password}`
        })
        console.log(data);
        dispatch(todo.login(data));
    }
    return (
        <div>
            Login Page
            
            <div>
                <p>Username: {userName}</p>
                <Input value={userName} setValue={setUserName}/>
            </div>
            <div>
                <p>Password:{password}</p>
                <Input value={password} setValue={setPassword}/>
            </div>
            <div>
                <button onClick={loginFunc}>
                    Login
                </button>
            </div>
        
        </div>
    )


}