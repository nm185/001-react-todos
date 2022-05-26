import './App.css';
import { useState } from 'react';

const Todo = ({ todo, index, setCheckedState }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.checked} onChange={() => setCheckedState(index, !todo.checked)} />
      <span>{todo.text}</span>
    </div>
  );
};

const NewTodoInput = ({ addTodo }) => {
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

function App() {
  const [todos, setTodos] = useState([
    { text: 'Pick up grandma', checked: false },
    { text: 'Go to store', checked: true },
  ]);

  const addTodo = (text) => {
    if (!text || text.length === 0) return;
    setTodos([...todos, { text, checked: false }]);
  };

  const setCheckedState = (index, checked) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = checked;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h3>Welcome to the todos app!</h3>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} setCheckedState={setCheckedState} delete={deleteTodo} />
      ))}
      <NewTodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
