import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AddTodo } from './components/AddTodo';
import store from './store/store';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <div className="App">
            <p>App</p>
            <AddTodo />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
