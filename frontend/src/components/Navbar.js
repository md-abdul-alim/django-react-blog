// import React from 'react';
// import {Link, NavLink} from 'react-router-dom';

// const Navbar = () => {

//     return(
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">My Blog</Link>
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" data-bs-toggle="collapse" 
//                     data-bs-target="#navbarNav" aria-controls="navbarNav" 
//                     aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" exact to="/blog">Blog</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// };

// export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
    //   borderBottom: "1px solid white",
    },
  }
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Abdul Alim
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <NavLink to="/" className={classes.link}>
              Home
            </NavLink>
            <NavLink to="/about" className={classes.link}>
              About
            </NavLink>
            <NavLink to="/contact" className={classes.link}>
              Contact
            </NavLink>
            <NavLink to="/blog" className={classes.link}>
              Blog
            </NavLink>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;