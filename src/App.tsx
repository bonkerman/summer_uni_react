import React, { useEffect, useState } from "react";
import { Todo } from "./api/model/todo";
import { getTodos } from "./api/todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>()
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res)
    });
  }, []);
  return (
    <div className="App">
      {todos&&JSON.stringify(todos)}
    </div>
  );
}

export default App;
