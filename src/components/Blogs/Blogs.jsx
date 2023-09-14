import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BookMarks from "../BookMarks/BookMarks";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMarks, setBookMarks] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("data.json");
            const data = await response.json();
            setBlogs(data);
        };

        fetchData();
    }, []);

    const addToBookmark = (item) => {
        const newItems = [...bookMarks, item];
        setBookMarks(newItems);
    };

    const handleMarkRead = reading_time => {
        setTime((time + parseInt(reading_time)));
    }

    return (
        <div className="grid grid-cols-3 gap-4 container mx-auto mt-5">
            <div className="col-span-2">
                <h1>This is blogs. {blogs.length}</h1>
                {blogs.map((blog) => (
                    <Blog
                        blog={blog}
                        key={blog.id}
                        addToBookmark={addToBookmark}
                        handleMarkRead={handleMarkRead}
                    ></Blog>
                ))}
            </div>
            <BookMarks bookMarks = {bookMarks} time = {time}></BookMarks>
        </div>
    );
};

export default Blogs;
