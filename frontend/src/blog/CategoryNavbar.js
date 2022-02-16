import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const CategoryNavbar = (props) => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const fetchCategories = async () =>{
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/categories/list/`);
                setCategories(res.data);
            }catch(err){

            }
        }
        fetchCategories()
    }, [])

    const getCategories = () => {
        let list = [];
        let result = [];

        categories.map(categories => {
            return list.push(
                <Link className="p-2 text-muted" to={`/category/${categories.name}`} state={{ category: categories.id }}>{categories.name}</Link>
            );
        });

        for (let i=0; i<list.length; i ++){
            result.push(
                <div key={i}>
                    {list[i]}
                </div>
            )
        }
        return result;
    }

    return(
        <div>
            {/* <div className='container mt-3'> */}
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between" >
                        {getCategories()}
                    </nav>
                </div>
            {/* </div> */}
        </div>
    )
    
};

export default CategoryNavbar