import jwt from "jsonwebtoken"
const JWT_SECRET= process.env.JWT_SECRET || "KOlKHARA"
export const verifyToken=(req,res,next)=>{
const authHeader= req.headers.authorization
if(!authHeader || !authHeader.startsWith("bearer ")){
    return res.status(400).json({message:"access denied"})
}
 const token = authHeader.split(" ")[1];
 try{
    const decoded = jwt.verify(token,JWT_SECRET)
    req.body=decoded
    next()
 }catch(error){
    console.log(error)
    return res.status(500).json({message:"invalid or expired token"})
 }

}