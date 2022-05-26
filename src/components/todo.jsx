const Todo = ({ todo, index, setCheckedState }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.checked} onChange={() => setCheckedState(index, !todo.checked)} />
      <span>{todo.text}</span>
    </div>
  );
};

export default Todo;
