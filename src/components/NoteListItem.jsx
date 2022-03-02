function NoteListItem(props) {
    return (
        <div>
            <div className='bg-gray-100 h-20 rounded-lg hover:scale-x-125 hover:scale-y-110 hover:shadow-lg origin-top-left duration-300'>
                <div className='w-full rounded-t-lg bg-yellow-300 h-1.5' />
                <div className='flex justify-center flex-col px-2 direct h-18.5'>
                    <div className='font-bold'>{props.title}</div>
                    <div>{props.text}</div>
                </div>
            </div>
        </div>
    );
}

export default NoteListItem;
