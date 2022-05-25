import './App.css';
import { useState } from 'react';
import Todo from './components/todo';

function App() {
  const [todos, setTodos] = useState([{ text: 'Pick up grandma' }, { text: 'Go to store' }]);

  return (
    <div className="todo-container">
      <h3>Welcome to the todos app!</h3>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}

export default App;
