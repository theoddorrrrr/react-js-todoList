import React from "react";
import { ITodoListProps } from "../../interfaces";

const TodoList: React.FC<ITodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <p className="center">There are no todos :(</p>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];

        if (todo.completed) {
          classes.push("_completed");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i className="green-text" onClick={() => onRemove(todo.id)}>
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
