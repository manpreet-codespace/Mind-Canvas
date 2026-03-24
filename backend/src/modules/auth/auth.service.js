import bcrypt from "bcrypt"
import auth from "./auth.models.js";

export const signupService =async(data)=>{
    const {name, email,  password} = data;  //destructing of properties 

    const existingUser = await auth.findOne({
        email
        //   $or: [{ email }, { phoneNumber }],
    });  //find mail or user if user exists or not

    if(existingUser)
    {
        console.log("User already exists ");

    }


    const hashPassword= await bcrypt.hash(password, 10);  //password is encrupted using hashing which is not encrypted.

  
    const user = await auth.create({    //here , create users in the dbs 
        name,
        email,
        password:hashPassword,
    })

    return user;    //return user here 


    
}