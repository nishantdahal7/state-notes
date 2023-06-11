export default function NoteList({ notes, filter }) {
  return (
    <div>
      <ul>
        {
          notes
            .filter((note) =>
              note.desc.toLowerCase().includes(filter.toLowerCase())
            )
            .map((note) => (
              <li key={note.id}>{note.desc}</li>
            ))

          // <li key={note.id}>
          //     {note.desc}
          // </li>
        }
      </ul>
    </div>
  );
}
