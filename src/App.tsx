import React, { useEffect, useState } from "react";
import { Todo } from "./api/model/todo";
import { getTodos, postTodo } from "./api/todos";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState<Todo[]>();
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, []);
  const handleTodoChange = (changedTodo: Todo) => {
    const changedTodoList = todos?.map((todo) =>
      todo.id === changedTodo.id ? changedTodo : todo
    );
    setTodos(changedTodoList);
  };

  const handleRemoval = (removedTodo: Todo) => {
    const changedTodoList = todos?.filter((todo) => todo.id != removedTodo.id);
    setTodos(changedTodoList);
  };

  const handleAdd = (todo: Todo) => {
    postTodo(todo).then((res) => {
      todos && setTodos([...todos, res]);
    });
  };

  return (
    <div className="App">
      <TodoInput onAdd={handleAdd} />
      <List>
        {todos &&
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              todo={todo}
              onChange={handleTodoChange}
              onRemove={handleRemoval}
            />
          ))}
      </List>
    </div>
  );
}

export default App;
