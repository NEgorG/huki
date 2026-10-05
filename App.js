const handleSubmit = (e) => {
  e.preventDefault();

  if (inputValue.trim() === '') return;

  const newTodo = {
    id: Date.now(),      
    text: inputValue.trim(),
    completed: false
  };

  setTodos([...todos, newTodo]);

  setInputValue('');

  return (
  <div className="App">
    <h1>TodoList</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Добавить задачу..."
      />
      <button type="submit">Добавить</button>
    </form>

    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  </div>
);

};
