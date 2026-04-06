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


        res.cookie("refreshToken",refreshToken,
            {
                httpOnly:true,
                secure:false,
                sameSite:"lax",
                maxAge:7 * 24 * 60 * 60 * 1000
            }
        )

        res.status(200).json({
            accessToken,
            existingUser
        })

    }
    catch(err)
    {
        res.status(500).json({error:err.message});

    }
} 


export const refresh = (req,res)=>{
    try{
        const refreshToken = req.cookies.refreshToken;
        
        const accessToken = authService.refreshTokenServices(refreshToken);

        res.json({accessToken});
    }
    catch(err)
    {
        res.status(401).json({message:err.message});

    }
}