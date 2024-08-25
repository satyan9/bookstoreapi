import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Bookroute from "./route/Bookroute.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(MONGO_URL, {
    dbName: DB_NAME
}).then(() => {
    console.log('Connected to database');
}).catch((err) => { 
    console.log('Connection error: ' + err);
});

// Default route


// Book routes
app.use("/book", Bookroute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
