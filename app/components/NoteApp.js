"use client";
import { useEffect, useState } from "react";
import noteService from "../services/noteService";
import AddNote from "./AddNote";
import NoteFilter from "./NoteFilter";
import NoteList from "./NoteList";

export default function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [desc, setDesc] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    noteService.getAllNotes().then((data) => setNotes(data));
  }, []);

  const handleAdd = (evt) => {
    evt.preventDefault();
    if (desc.trim() !== "") {
      const newNote = {
        desc: desc,
        important: Math.random() < 0.5,
      };

      noteService
        .createNote(newNote)
        .then((data) => setNotes(notes.concat(data)));
      setDesc("");
    }
  };

  return (
    <div>
      <NoteFilter filter={filter} setFilter={setFilter} />

      <NoteList notes={notes} filter={filter} />

      <AddNote handleAdd={handleAdd} desc={desc} setDesc={setDesc} />
    </div>
  );
}
