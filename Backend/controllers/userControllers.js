import express from "express"
import User from "../model/userModel.js"
import bcrypt from "bcrypt"
export const addUser=async(req,res)=>{
  const {firstName,lastName,email,password }=req.body

 try{
  const existingUser= await User.findOne({email})
  if(existingUser){
    return res.status(400).json({message:"email already in use ,try logging in  "})
  }
  const hashedPassword =await bcrypt.hash(password ,10)
  const newUser= new User({firstName,lastName,email,password:hashedPassword})
  await newUser.save()
   const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    const { password: _, ...userWithoutPassword } = newUser.toObject();

    return res.status(201).json({
      user: userWithoutPassword,
      token,
      message: "Account successfully created",
    });

 }catch(error){
  console.error("Error adding user:", error);
   return res.status(500).json({message:"connot add a new user"})
 }
}
export const getUser=async(req,res)=>{
const {email,password}=req.body
    const user = await User.findOne({ email });
try{
    const existingUser= await User.findOne({email})
    if(!existingUser){
      return res.status(400).json({message:"Incorrect email"})
    }
    const isPasswordValid= await bcrypt.compare(password,existingUser.password)
    if(!isPasswordValid){
      return res.status(400).json({message:"incorrect email or password"})
      
    }
     const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, {
      expiresIn: "7d",
    });
        const { password: _, ...userWithoutPassword } = newUser.toObject();
   return res.status(200).json({
      user: userWithoutPassword,
      token,
      message: "Login successful",
    });

}catch(error){
  console.log(error)
  return res.status(500).json({message:"something went wrong"})
}

}
export const getUserById=async(req,res)=>{
    const {id}= req.params
  try{
    const user = await User.findById(id).select("-password")
    if(!user){
      res.status(404).json({ message: "User not found" });
       
    }
 res.status(200).json(user)

  }
  catch(error){
    res.status(400).json({message:"failed"},error)
  }
}