import { useState } from 'react';

const Todo = ({ todo, index, setCheckedState, deleteTodo }) => {
  return (
    <div className="flex flex-row justify-between px-3 py-1 border-2 border-solid rounded border-gray-500">
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => setCheckedState(index, !todo.checked)}
          className="mr-2"
        />
        <span>{todo.text}</span>
      </div>
      <button onClick={() => deleteTodo(index)} className="border border-black rounded px-2 hover:bg-gray-100">
        Delete
      </button>
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
        <input
          id="new-todo"
          type="text"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
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
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  console.log(todos);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="text-4xl mt-12 mb-6">Welcome to the todos app!</div>
      <div className="flex flex-col space-y-2">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} setCheckedState={setCheckedState} deleteTodo={deleteTodo} />
        ))}
        <NewTodoInput addTodo={addTodo} />
        {todos.length > 0 && todos.filter((todo) => !todo.checked).length === 0 && <div>All todos complete!</div>}
      </div>
    </div>
  );
}

export default App;
