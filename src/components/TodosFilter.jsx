import useStore from "../store/store";

const TodosFilter = () => {
  const todos = useStore((state) => state.todos);

  return (
    <div>
      <p>
        <span>
          {todos.reduce((counter, todo) => {
            if (!todo.completed) counter++;
            return counter;
          }, 0)}
        </span>{" "}
        items left
      </p>
    </div>
  );
};

export default TodosFilter;
