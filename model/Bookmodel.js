//bookmodel
import mongoose from "mongoose";


const bookSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String,
    description:String,
})
const Book=mongoose.model("book",bookSchema);

export default Book;