import NoteListItem from "./NoteListItem";

function NoteList(props) {
    return (
        <div>
            <div className='bg-green-500 h-screen w-64 fixed'>
                <div className='uppercase font-semibold text-5xl text-center mt-2 text-pink-500'>
                    Jot
                </div>
                <div className='h-0.5 w-full mx-auto rounded-sm bg-gray-500 my-2' />
                {props.notes.map((note) => (
                    <NoteListItem title={note.title} text={note.text} />
                ))}
                <div>
                    <button
                        className='flex justify-center items-center bg-transparent h-20 hover:scale-125 duration-300 w-full'
                        onClick={props.addNewNote}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-9 w-9'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 4v16m8-8H4'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NoteList;
