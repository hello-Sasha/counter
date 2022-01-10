import {useState} from 'react';
import { Input } from '../components/Todo/components/Input';
import todo from '../store/actions/todo';
import { useDispatch } from 'react-redux';

export const SignUp =()=>{
    const qs= require('qs');
    const  dispatch = useDispatch();
    const [userName, setUserName]=useState('');
    const[password, setPassword]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');

    const loginFunc=()=>{
        const data = qs.stringify({
            'username':`${userName}`,
            'password':`${password}`,
            'email':`${email}`,
            'phone':`${phone}`
        })
        console.log(data);
        dispatch(todo.signUp(data));
    }
    return (
        <div>
            SighUp Page
            
            <div>
                <p>Username: {userName}</p>
                <Input value={userName} setValue={setUserName}/>
            </div>
            <div>
                <p>Password:{password}</p>
                <Input value={password} setValue={setPassword}/>
            </div>
            <div>
                <p>Email:{email}</p>
                <Input value={email} setValue={setEmail}/>
            </div>
            <div>
                <p>Phone:{phone}</p>
                <Input value={phone} setValue={setPhone}/>
            </div>
            <div>
                <button onClick={loginFunc}>
                    Sign up
                </button>
            </div>
        
        </div>
    )


}