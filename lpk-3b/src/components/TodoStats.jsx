export default function TodoStats({ todos }) {
  const total = todos.length;
  const selesai = todos.filter((t) => t.selesai).length;
  const belum = total - selesai;
  const persen = total === 0 ? 0 : Math.round((selesai / total) * 100);

  return (
    <div className="stats-card">
      <div className="stats-top">
        <span className="stats-text">
          🌿 <strong>{belum}</strong> tugas belum selesai
        </span>
        <span className="stats-badge">
          {selesai}/{total} ({persen}%)
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${persen}%` }}
        ></div>
      </div>
    </div>
  );
}