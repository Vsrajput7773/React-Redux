import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

 
  return (
    <>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div>{todo.text}</div>
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
