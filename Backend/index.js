import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import InquilinoRoute from "./routes/inquilinoRoute.js"
import authRoute from "./routes/authRoute.js"

dotenv.config();
const  port = process.env.PORT||3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoute);
app.use(InquilinoRoute);


app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`);
});