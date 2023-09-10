// App.jsx
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [todos] = useState([{ id: 1, title: "First Todo" }]);
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
