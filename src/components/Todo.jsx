import { useRef, useState } from "react";
import "./css/todo.css";
import { useEffect } from "react";
import TodoItems from "./TodoItems";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    if (inputRef.current.value.trim() !== "") {
      setTodos([
        ...todos,
        { no: count++, text: inputRef.current.value, display: "" },
      ]);
      inputRef.current.value = "";
      localStorage.setItem("todos_count", count);
    } else {
      alert("Please input a task");
    }
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos-count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">Todo List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your todo Task"
          className="todo-input"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              add();
            }
          }}
        />
        <div
          className="todo-add-btn"
          onClick={() => {
            add();
          }}>
          ADD
        </div>
      </div>
      <div className="todoList">
        {todos.map((item, index) => {
          return (
            <TodoItems
              no={item.no}
              display={item.display}
              text={item.text}
              key={index}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
