import React from "react";
import {FaRegBookmark} from 'react-icons/fa6';

const Blog = ({ blog, addToBookmark, handleMarkRead }) => {
    const {
        cover,
        title,
        author_img,
        author,
        post_date,
        reading_time,
        hashtag
    } = blog;
    return (
        <div className="mb-12">
            <img src={cover} alt="" />
            <div className="mt-5 flex justify-between">
                <div className="flex items-center gap-3">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={author_img}
                        alt={`cover picture of title ${title}`}
                    />
                    <div>
                        <p>{author}</p>
                        <small>{post_date}</small>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p>{reading_time} min read</p>
                    <p className="cursor-pointer" onClick={()=>addToBookmark(blog)} ><FaRegBookmark/></p>
                </div>
            </div>

            <h2 className="text-2xl font-bold my-5">{title}</h2>

            <div className="flex gap-3">
                {hashtag.map((tag) => (
                    // <a></a>
                    <a href="#">#{tag}</a>
                ))}
            </div>
            <p className="underline mt-5 cursor-pointer" onClick={()=>handleMarkRead(reading_time)}>Mark as read</p>
        </div>
    );
};

export default Blog;
