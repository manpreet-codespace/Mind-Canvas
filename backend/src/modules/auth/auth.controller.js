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


export const signin =async(req,res) =>{
    try{
        const {accessToken, refreshToken, existingUser}= await authService.signinService(req.body);
        res.status(200).json(signinUser);


        res.cookie("refreshToken",refreshToken,
            {
                httpOnly:true,
                secure:false,
                sameSite:"strict"
            }
        )

        res.json({
            accessToken,
            existingUser
        })

    }
    catch(err)
    {
        res.status(500).json({error:err.message});

    }
} 
