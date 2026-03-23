import * as authService from "./auth.service.js";

export const signup=async(req,res)=>{
    try{
        const user= await authService.signupService(req.body);
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({error:err.message});

    }
}

