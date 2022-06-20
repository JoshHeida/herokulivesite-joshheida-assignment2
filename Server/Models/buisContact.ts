//buisContact.ts josh heida 300644912 June 20 2022
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const buisContactsSchema= new Schema
({
    Name: String,
    phNumber: String,
    Email: String
},
{
    collection:"buisnessContacts"
})

const Model = mongoose.model("buisnessContacts",buisContactsSchema);
export default Model;