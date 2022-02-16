import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Blog from './blog/Blog';
import BlogDetail from './blog/BlogDetail';
import CategoryWiseList from './blog/CategoryWiseList';

import Layout from './layouts/Layout';
import BlogLayout from './layouts/BlogLayout';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>{/*https://flutterq.com/switch-is-not-exported-from-react-router-dom/*/}
          <Route exact path='/' element={<Home />} />
          <Route path="/" element={<BlogLayout/>}>
            <Route path='/blog' element={<Blog />} />
            <Route path='/category/:id' element={<CategoryWiseList />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
