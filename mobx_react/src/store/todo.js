import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 0, title: "Учить TypeScript", completed: true },
    { id: 222, title: "Учить Next.js", completed: false },
    { id: 333, title: "Учить Nest.js", completed: false },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log("remove");
  }

  completeTodo = (todo) => {
    todo.completed = !todo.completed;
    console.log("complete");
  };

  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
      });
  }
}

export default new Todo();
