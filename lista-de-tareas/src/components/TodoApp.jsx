import { useState } from "react";
import Todo from "./Todo";

export default function TodoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
    }

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
      <div className="todoContainer">
        {todos.map((item) => (
          <Todo key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}
