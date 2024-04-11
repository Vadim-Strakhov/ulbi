import { useSelector, useDispatch } from "react-redux";
// import {
//   addTodo,
//   decrement,
//   increment,
//   removeLastTodo,
// } from "./vanillaRedux/mainReducer";
import {
  addTodo,
  decrement,
  increment,
  removeLastTodo,
} from "./toolkitRedux/toolkitSlice";
// import {
//   decrementToolkit,
//   incrementToolkit,
// } from "./toolkitRedux/toolkitReducer";

const addAsyncTodo = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo("ASYNC_TODO"));
    }, 2000);
  };
};

function App() {
  // const count = useSelector((state) => state.main.count);
  // const todos = useSelector((state) => state.main.todos);
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-center m-5">
        Счетчик <span className="badge text-bg-secondary">{count}</span>
      </h2>
      <div>
        <div className="d-flex m-5 justify-content-around">
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-primary m-1"
          >
            Инкремент
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-primary m-1"
          >
            Декремент
          </button>
          <button
            onClick={() => dispatch(removeLastTodo())}
            className="btn btn-primary m-1"
          >
            Удалить последний ТУДУ
          </button>
          <button
            onClick={() => dispatch(addTodo(prompt()))}
            className="btn btn-primary m-1"
          >
            Добавить ТУДУ
          </button>
          <button
            onClick={() => dispatch(addAsyncTodo())}
            className="btn btn-primary m-1"
          >
            Добавить АСИНК ТУДУ
          </button>
        </div>
        <ul className="list-group">
          {todos.map((todo, i) => (
            <li className="list-group-item" key={i}>
              {todo}
            </li>
          ))}
        </ul>
      </div>

      {/* <div>
      //_ без slice
        <div className="d-flex m-5 justify-content-around">
          <button
            onClick={() => dispatch(incrementToolkit())}
            className="btn btn-primary m-1"
          >
            Инкремент
          </button>
          <button
            onClick={() => dispatch(decrementToolkit())}
            className="btn btn-primary m-1"
          >
            Декремент
          </button>
        </div>
      </div> */}

      {/* <div>
       //_ обычный redux
        <div className="d-flex m-5 justify-content-around">
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-primary m-1"
          >
            Инкремент
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-primary m-1"
          >
            Декремент
          </button>
          <button
            onClick={() => dispatch(removeLastTodo())}
            className="btn btn-primary m-1"
          >
            Удалить последний ТУДУ
          </button>
          <button
            onClick={() => dispatch(addTodo(prompt()))}
            className="btn btn-primary m-1"
          >
            Добавить ТУДУ
          </button>
        </div>
        <ul className="list-group">
          {todos.map((todo, i) => (
            <li className="list-group-item" key={i}>
              {todo}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;
