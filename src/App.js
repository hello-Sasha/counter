import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import store from './store/store';
import {RoutesTodo} from './routes/routes';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter basename='/' >
        <div className="Navigation">
            <ul> 
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
        </div>
        <RoutesTodo />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
