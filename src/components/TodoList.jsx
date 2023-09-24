import React from "react";
import "./style.css";
import { Todo } from "../model";
import STodo from "./Todo";

type Props = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
};

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <STodo />
      ))}
    </div>
  );
};

export default TodoList;
