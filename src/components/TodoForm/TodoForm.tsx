import React, { useState, useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // console.log(title);
      // setTitle("");
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt-2">
      <input
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Finish task"
      />
      <label htmlFor="title" className="active">
        Enter todo:
      </label>
    </div>
  );
};

export default TodoForm;
