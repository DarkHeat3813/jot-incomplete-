import Draggable from "react-draggable";
import "../stylesheets/Note.css";

function Note(props) {
    return (
        <Draggable>
            <div>
                <div
                    className='bg-yellow-300 h-64 w-64 hover:scale-110 duration-300 shadow-xl note-text font-bold px-4 transform-origin-center'
                    style={{
                        transform: `translate(${props.position[0]}px, ${props.position[1]}px)`,
                    }}
                >
                    <div className='flex items-center justify-center text-2xl h-1/6 text-black text-center'>
                        {props.title}
                    </div>
                    <div className='h-px w-full mx-auto rounded-sm bg-gray-500' />
                    <div className='h-4/6 flex items-center justify-center text-center text-xl overflow-auto my-auto px-4'>
                        {props.text}
                    </div>
                    <div className='h-px w-full mx-auto rounded-sm bg-gray-500' />
                    <div className='flex items-center h-1/6'>
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
                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                            />
                        </svg>
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
                                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default Note;
