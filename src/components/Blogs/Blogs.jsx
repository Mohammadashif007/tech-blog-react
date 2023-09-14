import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('data.json');
            const data = await response.json();
            setBlogs(data);
        }

        fetchData();
    },[])

    return (
        <div className='col-span-2'>
            <h1>This is blogs. {blogs.length}</h1>
            {
                blogs.map(blog =><Blog blog = {blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;