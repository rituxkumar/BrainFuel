import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1>All blogs</h1>
      <div className="relative max-w-4xl overflow-x-auto mt-4 h-4/5 shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-600">
          <thead className="text-xs text-gray-600 text-left ippercase">
            <tr>
              <th space="col" className="px-2 py-4 xl:px-6">
                #
              </th>
              <th space="col" className="px-2 py-4">
                Blog Title
              </th>
              <th space="col" className="px-2 py-4 max-sm:hidden">
                Date
              </th>
              <th space="col" className="px-2 py-4 max-sm:hidden">
                Status
              </th>
              <th space="col" className="px-2 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
