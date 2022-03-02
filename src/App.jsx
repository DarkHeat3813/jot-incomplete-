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
            <NoteList
                notes={noteData.notes}
                addNewNote={() => {
                    setNoteData({
                        notes: [
                            ...noteData.notes,
                            {
                                text: "[Text]",
                                title: "[Title]",
                                position: [0, 0],
                            },
                        ],
                    });
                }}
            />
            <div className='pl-64'>
                {noteData.notes.map((note, noteIndex) => (
                    <Note
                        title={note.title}
                        text={note.text}
                        position={note.position}
                        changeTitle={(title) => {
                            setNoteData({
                                notes: noteData.notes.map((note, index) => {
                                    if (index === noteIndex) {
                                        return {
                                            title: title,
                                            text: note.text,
                                            position: note.position,
                                        };
                                    }
                                    return note;
                                }),
                            });
                        }}
                        changeText={(text) => {
                            setNoteData({
                                notes: noteData.notes.map((note, index) => {
                                    if (index === noteIndex) {
                                        return {
                                            title: note.title,
                                            text: text,
                                            position: note.position,
                                        };
                                    }
                                    return note;
                                }),
                            });
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
