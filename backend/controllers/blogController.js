import imagekit from "../configs/imageKit";
import Blog from "../models/Blog.js";
import fs from 'fs'


export const addBlog = async (req,res) =>{
  try {
    const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog);
    const imageFile = req.file;

    //check for all fields are present.
   
    if(!title || !description || !category || !imageFile){
      return res.json({success:false,message:"Missing required fields"})
    }

    const fileBuffer = fs.readFileSync(imageFile.path)

    // upload image to imagekit

    const response = await imagekit.upload({
      file:fileBuffer,
      fileName:imageFile.originalname,
      folder:"/blogs"
    })

    // optimization through imagekit url transformation
   
    const optimizedImageUrl = imagekit.url({
      path:response.filePath,
      transformation:[
        {quality:'auto'}, // auto compression
        {format:'webp'}, // convert to modern format
        {width:'1280'} // width resizing
      ]
    });

    const image = optimizedImageUrl;

   await Blog.create({title,subTitle,description,category,image,isPublished})

   res.json({success:true,message:"Blog added successfully 🚀"})

     
  } catch (error) {

    res.json({success:false,message:error.message})
    
  }
}