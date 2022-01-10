
import {Routes, Route} from 'react-router-dom';
import { Home } from "../pages/Home";
import { Todo } from "../pages/Todo";
import {Login} from "../pages/Login";
import { SignUp } from '../pages/SignUp';

export const RoutesTodo =( )=>{
   return(
       <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/todo" element={<Todo/>} />
            <Route path ="/login" element={<Login/>} />
            <Route path ="/signup" element={<SignUp/>} />
       </Routes>
   )
}