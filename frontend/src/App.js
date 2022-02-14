import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';

import Layout from './hocs/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>{/*https://flutterq.com/switch-is-not-exported-from-react-router-dom/*/}
          <Route exact path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
