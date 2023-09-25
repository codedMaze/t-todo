import React from "react";
import "./style.css";
import { Todo } from "../model";
import STodo from "./Todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading"> Active Tasks</span>
        {todos.map((todo) => (
          <STodo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading"> Completed Tasks</span>
        {todos.map((todo) => (
          <STodo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
