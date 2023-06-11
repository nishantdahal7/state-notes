export default function NoteFilter({ filter, setFilter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search notes ..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
