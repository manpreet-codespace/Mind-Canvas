import jwt from "jsonwebtoken";

export const generateWebToken=(user)=>{
    const accessToken= jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"15min"}
    )

    const refreshToken = jwt.sign(
        {id: user._id},
        process.env.REFRESH_SECRET,
        {expiresIn: "7d"}
    )

    return {accessToken, refreshToken};
    
}