import useStore from "../store/store";
import FilterRadio from "./FilterRadio";

const TodosFilter = () => {
  const todos = useStore((state) => state.todos);

  return (
    <div className="todos-filter">
      <p className="todos-status">
        <span>
          {todos.reduce((counter, todo) => {
            if (!todo.completed) counter++;
            return counter;
          }, 0)}
        </span>{" "}
        items left
      </p>
      <FilterRadio />
      <button>Clear completed</button>
    </div>
  );
};

export default TodosFilter;
