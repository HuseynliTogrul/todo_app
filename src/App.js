import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  //create
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  //remove
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  //update
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setTodos([...updatedTodos]);
  };

  return (
    <div className="App">
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
