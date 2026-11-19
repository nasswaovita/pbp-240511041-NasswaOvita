export default function TodoItem({ todo, onHapus, onToggle }) {
  return (
    <li className={todo.selesai ? "todo-item selesai" : "todo-item"}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.selesai}
          onChange={() => onToggle(todo.id)}
        />
        <span className="custom-check"></span>
        <span className="teks">{todo.teks}</span>
      </label>
      <button
        type="button"
        className="hapus"
        onClick={() => onHapus(todo.id)}
        title="Hapus tugas"
      >
        Hapus
      </button>
    </li>
  );
}