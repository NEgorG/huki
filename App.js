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

  const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed } 
        : todo                                   
    )
  );
};

<ul>
  {todos.map((todo) => (
    <li
      key={todo.id}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  ))}
</ul>

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
