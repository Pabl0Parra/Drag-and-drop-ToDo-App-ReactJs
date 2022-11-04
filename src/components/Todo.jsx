import useStore from "../store/store";

const Todo = ({ todo }) => {
  const todos = useStore((state) => state.todos);
  const setTodos = useStore((state) => state.setTodos);

  const handleRemoveTodo = () => {
    const targetTodoId = todo.id;
    setTodos(todos.filter((oldTodo) => oldTodo.id !== targetTodoId));
  };

  return (
    <div>
      {todo.title}
      <button onClick={handleRemoveTodo}>X</button>
    </div>
  );
};

export default Todo;
