import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/admin/Layout";
import AddBlog from "./pages/admin/AddBlog";
import Comments from "./pages/admin/Comments";
import Dashboard from "./pages/admin/Dashboard";
import ListBlog from "./pages/admin/ListBlog";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comments/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
