import axios from "axios";
import { useEffect, useState } from "react";

const BlogList = () => {

    const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        axios.get(blogUrl)
            .then((resp) => {
                setBlogList(resp.data);
            })
    }, []);

    return (
        <div>
            <h1>All Blogs List</h1>
            <p> {blogList.length} blogs found. </p>
        </div>
    );
};

export default BlogList;