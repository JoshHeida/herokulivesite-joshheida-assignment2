import mongoose, {PassportLocalSchema} from "mongoose";
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';
const userSchema= new Schema
({
    Displayname: String,
    username: String,
    EmailAddress: String,
    Created:
    {
        type:Date,
        default: Date.now()
    },
    Updated:{
        type: Date,
        default: Date.now()
    }
},
{
    collection:"users"
});

declare global
{
    export type userDocument = mongoose.Document & 
    {
        username: String,
        EmailAddress: String,
        DisplayName:String
    }
}

userSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User",userSchema as PassportLocalSchema);
export default Model;