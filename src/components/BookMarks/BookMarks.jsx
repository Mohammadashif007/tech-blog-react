import React from "react";

const BookMarks = ({ bookMarks, time }) => {
    return (
        <div className="text-center">
            <h1>Total Time to read : {time}</h1>
            <div className="bg-gray-300 m-2 p-3">
                <h2>Book marks blogs : {bookMarks.length}</h2>
                {bookMarks.map((bookMark) => {
                    return (
                        <p
                            key={bookMark.id}
                            className="my-2 p-2 bg-slate-400 rounded"
                        >
                            {bookMark.title}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default BookMarks;
