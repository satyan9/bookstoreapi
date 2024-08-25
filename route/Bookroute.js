//bookrouter
import express from "express";
import { getBook } from "../controller/Bookcon.js";


const router=express.Router();

router.get("/",getBook);

export default router;