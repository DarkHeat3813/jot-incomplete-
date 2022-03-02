import NoteListItem from "./NoteListItem";

function NoteList(props) {
    return (
        <div>
            <div className='bg-green-500 h-screen w-64 fixed overflow-y-scroll'>
                <div className='uppercase font-semibold text-5xl text-center mt-2 text-pink-500'>
                    Jot
                </div>
                <div className='h-0.5 w-full mx-auto rounded-sm bg-gray-500 my-2' />
                <NoteListItem title='[Title]' text='[Text]' />
                <NoteListItem title='[Title]' text='[Text]' />
                <NoteListItem title='[Title]' text='[Text]' />
                <NoteListItem title='[Title]' text='[Text]' />
                <NoteListItem title='[Title]' text='[Text]' />
                <NoteListItem title='[Title]' text='[Text]' />
                <NoteListItem title='[Title]' text='[Text]' />
                <NoteListItem title='[Title]' text='[Text]' />
            </div>
        </div>
    );
}

export default NoteList;
