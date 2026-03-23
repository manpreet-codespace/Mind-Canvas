import bcrypt from "bcrypt"
import auth from "./auth.models.js";

export const signupService =async(data)=>{
    const {fname, lname, email, phoneNumber, password, address} = data;  //destructing of properties 

    const existingUser = await auth.findOne({
          $or: [{ email }, { phoneNumber }],
    });  //find mail or user if user exists or not

    if(existingUser)
    {
        console.log("User already exists ");

    }


    const hashPassword= await bcrypt.hash(password, 10);  //password is encrupted using hashing which is not encrypted.

  
    const user = await auth.create({    //here , create users in the dbs 

        fname,
        lname,
        email,
        phoneNumber,
        password:hashPassword,
        address
    })

    return user;    //return user here 


    
}