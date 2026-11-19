import TodoItem from "./TodoItem";

export default function TodoList({ todos, onHapus, onToggle }) {
  if (todos.length === 0) {
    return (
      <div className="kosong">
        <span className="kosong-icon">🌷</span>
        <p>Belum ada tugas di daftar ini.</p>
        <small>Yuk tambahkan tugas barumu di atas!</small>
      </div>
    );
  }

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onHapus={onHapus}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}