import mongoose from "mongoose";

const authSchema =new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,

    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }

})


export default mongoose.model("auth", authSchema);

