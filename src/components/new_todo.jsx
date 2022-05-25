import { useState } from 'react';

const NewTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="new-todo">New Todo</label>
        <input
          id="new-todo"
          type="text"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        ></input>
      </div>
    </form>
  );
};

export default NewTodo;
