import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../../context/AppContext";
import { assets } from "../../assets/assets";

const Layout = () => {
  

 const {axios,setToken,navigate} = useAppContext()

  const logout = () =>{
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null)
    navigate("/")
  }
  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <div
               className="  py-2 px-3  text-white rounded-md cursor-pointer"
               onClick={() => navigate("/")}
             >
              <img src={assets.home} alt="img"  className="w-32"/>
             </div>
        <button className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
