import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
    <h2>Welcome To Todo </h2>
    <AddTodo/>
    <Todos/>
    </>
    );
}

export default App;
