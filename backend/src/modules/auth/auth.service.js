import bcrypt from "bcrypt"
import auth from "./auth.models.js";
import { generateWebToken } from "../../utils/jwt.js";

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


    const hashPassword= await bcrypt.hash(password, 10);  //password is encrypted using hashing which is not decrypted.

    const user = await auth.create({    //here , create users in the dbs 
        name,
        email,
        password:hashPassword,
    })

    return user;    //return user here 
    
}


export const signinService =async(data)=>{
    const {email, password}= data;

    const existingUser = await auth.findOne({email});
    if(!existingUser)
    {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if(!isMatch)
    {
       throw new Error("Invalid credentials");
    }

   const {accessToken, refreshToken}= generateWebToken(existingUser);
   
    
    return {existingUser, accessToken, refreshToken};

}

