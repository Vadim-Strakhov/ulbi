import { observer } from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {
  console.log("render");
  return (
    <>
      <button
        className="btn btn-primary d-block my-5 mx-auto"
        onClick={() => todo.fetchTodos()}
      >
        Fetch todos
      </button>
      <ul className="list-group fs-3">
        {todo.todos.map((t) => (
          <li className="list-group-item d-flex align-items-center" key={t.id}>
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              checked={t.completed}
              onChange={() => todo.completeTodo(t)}
              id={`checkbox-${t.id}`}
            />
            <label
              className="form-check-label flex-grow-1 ms-2"
              htmlFor={`checkbox-${t.id}`}
            >
              {t.title}
            </label>
            <button
              className="btn btn-primary"
              onClick={() => todo.removeTodo(t.id)}
            >
              Delete todo
            </button>
          </li>
        ))}
      </ul>
    </>
  );
});
export default Todo;
