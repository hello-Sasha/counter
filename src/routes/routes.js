
import {Routes, Route} from 'react-router-dom';
import { Home } from "../pages/Home";
import { Todo } from "../pages/Todo";

export const RoutesTodo =( )=>{
   return(
       <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/todo" element={<Todo/>} />
       </Routes>
   )
}