import './App.css';
import { useState } from 'react';
import Todo from './components/todo';
import NewTodoInput from './components/new_todo';

function App() {
  const [todos, setTodos] = useState([{ text: 'Pick up grandma' }, { text: 'Go to store' }]);

  const addTodo = (text) => {
    if (!text || text.length === 0) return;
    setTodos([...todos, { text }]);
  };

  return (
    <div className="todo-container">
      <h3>Welcome to the todos app!</h3>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
      <NewTodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
