import React from 'react';
import {Outlet} from 'react-router-dom';
import Search from '../blog/search'
import CategoryNavbar from '../blog/CategoryNavbar';
import { Grid } from "@material-ui/core";

const BlogLayout = (props) => {

    return(
        // <div className='container mt-3'>
        <Grid container alignItems="flex-start" spacing={2} >
            <Grid item md={2} sm={2} xs={2}>
                
            </Grid>
            <Grid item md={8} sm={8} xs={8}>
                <Grid item md={12} sm={12} xs={12}>
                    <CategoryNavbar/>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Search />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Outlet/>
                </Grid>
            </Grid>
            <Grid item md={2} sm={2} xs={2}>
                
            </Grid>
        </Grid>
        
        //     {/* {props.children} */}
        // {/* </div> */}
    )
    
};

export default BlogLayout