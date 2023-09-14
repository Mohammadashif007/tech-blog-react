import React from "react";

const Blog = ({ blog }) => {
    const {
        cover,
        title,
        author_img,
        author,
        post_date,
        reading_time,
        hashtag,
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
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold my-5">{title}</h2>

            <div className="flex gap-3">
                {hashtag.map((tag) => (
                    <p>#{tag}</p>
                ))}
            </div>
        </div>
    );
};

export default Blog;
