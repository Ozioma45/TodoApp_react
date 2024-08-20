import "./css/todoitems.css";
import tick from "./assets/tick.png";
import not_tick from "./assets/not_tick.png";
import cross from "./assets/cross.png";

const TodoItems = ({ no, display, text, setTodos }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data));
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data));
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => toggle(no)}>
        {display === "" ? (
          <img src={not_tick} alt="not tick" />
        ) : (
          <img src={tick} alt="tick" />
        )}
        <div className="todoitems-text">{text}</div>
      </div>
      <img
        src={cross}
        alt="cross"
        className="todoitemsCross"
        onClick={() => {
          deleteTodo(no);
        }}
      />
    </div>
  );
};

export default TodoItems;
