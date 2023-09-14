import React from 'react';

const BookMarks = ({bookMarks}) => {

    return (
        <div className='text-center bg-gray-300 m-2 p-3'>
            <h1>Book marks blogs : {bookMarks.length}</h1>
            {
                bookMarks.map(bookMark => {
                   return <p key={bookMark.id} className='my-2 p-2 bg-slate-400 rounded'>{bookMark.title}</p>
                })
            }
        </div>
    );
};

export default BookMarks;