import React, { useState } from "react";
import TodoList from "../components/todos/TodoList";

function Todos() {
  const [TodoData, setTodoData] = useState([]);
  // js 자리
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      setTodoData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getTodos();

  function resetTodo() {
    setTodoData([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Todos 목록
        <button onClick={getTodos}>목록 가져오기</button>
        <button onClick={resetTodo}>목록 초기화</button>
      </h1>
      <div>
        {TodoData.map(function (item, index) {
          return (
            <TodoList
              userId={item.userId}
              id={item.id}
              title={item.title}
              completed={item.completed}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
