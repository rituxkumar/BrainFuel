import React, { useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Quill from "quill";
const AddBlog = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublisehed, setIsPublished] = useState(false);

  const genrateContent = async () => {};

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-green-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            className="mt-2 h-16 rounded cursor-pointer"
            alt=""
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>
        <p className="mt-4">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full mt-2 p-2 max-w-lg rounded outline-none border border-gray-300"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full mt-2 p-2 max-w-lg rounded outline-none border border-gray-300"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg pt-2 relative h-64 pb-16 sm:pb-10">
          <button
            type="button"
            onClick={genrateContent}
            className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer hover:bg-black/45"
          >
            Genrate with AI
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBlog;
