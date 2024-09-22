import express from "express";
import dbCon  from "./utlis/db.js";
import  dotenv from "dotenv";
import routers from "./routes/routes.js";
import cors from "cors";
import events from "events";
import mongoose  from "mongoose";

dotenv.config();


// Increase Max Listeners
events.EventEmitter.defaultMaxListeners = 20;
const app = express();


dbCon();
app.use(express.json());

app.use(cors());

app.use(`/api`, routers);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// app.listen(process.env.PORT,()=>{
//     console.log("server is runing ");
// })

// console.log("hello i am akshay");

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
});