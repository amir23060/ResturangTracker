import express from "express"
import User from "../model/userModel.js"
export const addUser=async(req,res)=>{
  const {firstName,lastName,email,password }=req.body
  const newUser= new User({firstName,lastName,email,password})
  await newUser.save()
  res.json(newUser)
}
export const getUser=async(req,res)=>{
const {email,password}=req.body
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    if(user.password === password){
        res.json(user)
    }
    else{
        res.status(404).json({message:"failed"})
    }


}

export const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    if (user) {
      return res.json(user)
    }
    return res.status(404).json({ message: "User not found" })
  } catch (error) {
    return res.status(400).json({ message: "failed", error: String(error?.message || error) })
  }
}