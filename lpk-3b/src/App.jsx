import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("semua");

  // Load dari localStorage saat mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  // Simpan ke localStorage saat todos berubah
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const tambah = (teks) => {
    setTodos([...todos, { id: Date.now(), teks, selesai: false }]);
  };

  const hapus = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggle = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, selesai: !t.selesai } : t
      )
    );
  };

  const hapusSelesai = () => {
    setTodos(todos.filter((t) => !t.selesai));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "aktif") return !t.selesai;
    if (filter === "selesai") return t.selesai;
    return true;
  });

  const adaYangSelesai = todos.some((t) => t.selesai);

  return (
    <div className="page-wrapper">
      <div className="app">
        <header className="app-header">
          <span className="badge-mhs">Nasswa Ovita • 240511041 • TI24D</span>
          <h1>🌸 My Cute To-Do List</h1>
          <p className="subtitle">Catat & selesaikan target harianmu dengan semangat!</p>
        </header>

        <TodoForm onTambah={tambah} />

        <TodoStats todos={todos} />

        <div className="filter-bar">
          <div className="filter-tabs">
            <button
              type="button"
              className={filter === "semua" ? "tab-btn active" : "tab-btn"}
              onClick={() => setFilter("semua")}
            >
              Semua ({todos.length})
            </button>
            <button
              type="button"
              className={filter === "aktif" ? "tab-btn active" : "tab-btn"}
              onClick={() => setFilter("aktif")}
            >
              Belum ({todos.filter((t) => !t.selesai).length})
            </button>
            <button
              type="button"
              className={filter === "selesai" ? "tab-btn active" : "tab-btn"}
              onClick={() => setFilter("selesai")}
            >
              Selesai ({todos.filter((t) => t.selesai).length})
            </button>
          </div>

          {adaYangSelesai && (
            <button
              type="button"
              className="btn-clear"
              onClick={hapusSelesai}
            >
              Bersihkan Selesai ✨
            </button>
          )}
        </div>

        <TodoList
          todos={filteredTodos}
          onHapus={hapus}
          onToggle={toggle}
        />
      </div>
    </div>
  );
}