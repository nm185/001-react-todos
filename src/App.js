import './App.css';
import { useState } from 'react';
import Todo from './components/todo';
import NewTodoInput from './components/new_todo';

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

  return (
    <div className="todo-container">
      <h3>Welcome to the todos app!</h3>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} setCheckedState={setCheckedState} />
      ))}
      <NewTodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
