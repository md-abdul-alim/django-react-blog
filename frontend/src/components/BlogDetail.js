import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'


const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});
    const location = useLocation()
    const { slug } = location.state

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`)
                setBlog(res.data)
            }catch(err){

            }
        };
        fetchData()
    }, [slug]);

    const createBlog = () => {
        return {__html: blog.content}
    }

    const capitalizeFirstLetter = (word) =>{
        if(word){
            return word.charAt(0).toUpperCase() + word.slice(1);
        }else{
            return '';
        }
    };

    return(
        <div className='container ml-3'>
            <h1 className='display-2'>{blog.title}</h1>
            <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(blog.category)}</h2>
            <h4>{blog.month} {blog.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()}/>
            <hr/>
            <p className='lead mb-5'>
                <Link to='/blog' className='font-weight-bold'>Back to Blogs</Link>
            </p>
        </div>
    )
};

export default BlogDetail;