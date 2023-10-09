import React, { useState } from "react";
// import { DragDropContext } from "@types/react-beautiful-dnd"
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    console.log(todos);
  };

  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputField todo={todo} setTodo={setTodo} onAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completed={completed}
        setCompleted={setCompleted}
      />
    </div>
  );
};

export default App;
