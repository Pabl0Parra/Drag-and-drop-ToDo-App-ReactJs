import useStore from "../store/store";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../hooks/useFetch";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useStore((state) => state.todos);
  const [isAdding, setIsAdding] = useState(false);
  const setTodos = useStore((state) => state.setTodos);
  const { post } = useFetch(
    "https://my-json-server.typicode.com/Pabl0Parra/json-server-data/"
  );

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (newTodo.length < 2) return;

      setIsAdding(true);

      post("todos", {
        userId: 1,
        title: newTodo,
        completed: false,
      })
        .then((data) => {
          if (data) {
            setTodos([
              ...todos,
              {
                userId: 1,
                id: uuidv4(),
                title: newTodo,
                completed: false,
              },
            ]);
            setNewTodo("");
            setIsAdding(false);
          }
        })
        .catch((error) => {
          setIsAdding(false);
          console.error(error);
        });
    }
  };

  return (
    <div className="input-box">
      <div className="input-box__circle"></div>
      <label className="sr-only" htmlFor="newTodo">
        add new todo
      </label>
      <input
        type="text"
        id="newTodo"
        name="newTodo"
        className="input-box__input"
        value={newTodo}
        disabled={isAdding}
        onKeyDown={handleKeyDown}
        onChange={handleNewTodoChange}
        placeholder="Create a new todo…"
      />
    </div>
  );
};

export default AddTodo;
