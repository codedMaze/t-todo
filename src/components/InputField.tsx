import React, { useRef } from "react";

import "./style.css";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAdd: (e: React.FormEvent) => void;
};
const InputField: React.FC<Props> = ({ todo, setTodo, onAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action=""
      className="input"
      onSubmit={(e) => {
        onAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
