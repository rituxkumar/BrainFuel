import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send("API is working fine.");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

export default app;