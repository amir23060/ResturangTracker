import express from "express"
import User from "../model/userModel.js"

export const addUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const exists = await User.findOne({ email });
  if (exists) {
    return res.status(409).json({ message: "Email already in use" });
  }
  const newUser = new User({ firstName, lastName, email, password });
  await newUser.save();
  return res.status(201).json(newUser);
};

export const getUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing credentials" });
  }
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  return res.json(user);
};

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