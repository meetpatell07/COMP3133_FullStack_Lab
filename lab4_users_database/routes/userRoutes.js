const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (error){
        console.error("Error adding User:", error);
        res.status(400).json({ message: error.message });
    }
})
module.exports = router;