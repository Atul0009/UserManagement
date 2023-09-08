import express from "express";
import conf from "./database/db.js";
import Router from "./routes/api.js";
import cors from "./cors/cors.js";

const app = express();
app.use(cors);

app.use(express.json());
conf();

app.use(Router);
const port = 6000;



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})