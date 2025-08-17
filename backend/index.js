import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";

const app = express();
await connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is working fine.");
});

//routes
app.use("/api/v1", adminRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

export default app;
