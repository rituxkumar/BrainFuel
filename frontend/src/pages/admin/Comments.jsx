import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-green-50/50">
      <div className="flex justify-between items-center" max-w-3xl>
        <h1>Comments</h1>
        <div className="flex gap-4">
          <button
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${
              filter === "Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Approved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
