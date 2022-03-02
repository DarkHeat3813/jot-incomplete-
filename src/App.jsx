import Note from "./components/Note";
import NoteList from "./components/NoteList";
import { useState } from "react";

function App() {
    const [noteData, setNoteData] = useState({
        notes: [
            {
                title: "[Title]",
                text: "[Text]",
                position: [0, 0],
            },
            {
                title: "[Title]",
                text: "[Text]",
                position: [0, 0],
            },
        ],
    });

    return (
        <div>
            <NoteList />
            <div className='pl-64'>
                {noteData.notes.map((note) => (
                    <Note
                        title={note.title}
                        text={note.text}
                        position={note.position}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
