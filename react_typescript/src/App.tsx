import Card, { CardVariant } from "./component/Card";
import EventsExample from "./component/EventsExample";

import { BrowserRouter, NavLink, Route } from "react-router-dom";
import UserPage from "./component/UserPage";
import TodoPage from "./component/TodoPage";
import UserItemPage from "./component/UserItemPage";
import TodoItemPage from "./component/TodoItemPage";

function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <EventsExample />
        <Card
          onClick={(num) => console.log("click", num)}
          variant={CardVariant.outlined}
          width="200px"
          height="200px"
        >
          <button>Кнопка</button>
          <div>привет</div>
        </Card>
      </div> */}
      <div>
        <div>
          <NavLink to="/users" style={{ marginRight: 15 }}>
            Пользователи
          </NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>
        <Route path={"/users"} exact>
          <UserPage />
        </Route>
        <Route path={"/todos"} exact>
          <TodoPage />
        </Route>
        <Route path={"/users/:id"}>
          <UserItemPage />
        </Route>
        <Route path={"/todos/:id"}>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
