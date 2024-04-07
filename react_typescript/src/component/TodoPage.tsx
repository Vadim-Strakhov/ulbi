import { FC } from "react";
import List from "./List";
import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";
import axios from "axios";

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      console.log(response.data);
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};
export default TodoPage;
