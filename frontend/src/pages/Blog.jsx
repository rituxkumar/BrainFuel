import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data } from "../assets/assets";
import Moment from 'moment';
import Navbar from "../components/Navbar";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const data = blog_data.find(item => item._id === id);
    setData(data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
   <div className="relative">
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
       
       <Navbar />
    </nav>
   
    <img src={assets.gradientBackground} alt="" className="absoulte -z-10 object-cover top-0 left-0 w-full h-[300px] opacity-50" />


    <div className="text-center text-gray-600">
      <p className="text-primary py-4 font-medium">Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
      <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">{data.title}</h1>
      <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
      <p className="inline-block py-1 px-4 rounded-full mb-6  border text-sm border-primary/5 font-medium text-primary">Ritu kumar</p>
    </div>

   </div>
  ):<div>loading</div>

};

export default Blog;
