import React from 'react';
import Navbar from '../components/Navbar';
import { Grid } from "@material-ui/core";
const Layout = (props) => {

    return(
        // <div>
        //     <Navbar />
        //     {props.children}
        // </div>
        <Grid container alignItems="flex-start" spacing={1}>
            <Navbar />
            {props.children}
        </Grid>
    )
    
};

export default Layout