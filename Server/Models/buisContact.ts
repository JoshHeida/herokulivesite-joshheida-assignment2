import mongoose from "mongoose";
const Schema = mongoose.Schema;

const buisContactsSchema= new Schema
({
    Name: String,
    PhNumber: String,
    Email: String
})

const Model = mongoose.model("buisnessContacts",buisContactsSchema);
export default Model;