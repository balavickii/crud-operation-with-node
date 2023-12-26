
const ayncHandler = require('express-async-handler');
const User = require('../models/userModels');
const bcrypt = require('bcrypt');
// desc Register all contacts
// route post /api/contacts
//acces public


const registerUser=ayncHandler(async(req,res) => {
    const {username,email,password}= req.body;
    console.log(username)
    if(!username || !email || !password)
    {
        res.status(400)
        throw new Error("required")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable )
    {
        res.status(400)
        throw new Error("Allready exist")
    }
    //hash  passwored
    const hashedpassword = await bcrypt.hash(password,10)
    console.log(hashedpassword)
    const user = await User.create({
        username,
        email,
        password:hashedpassword,
    })
    console.log(`user is created${user}`)
    if (user) {
        res.status(201).json({_id : user.id, email : user.email})
    } else {
        res.status(400)
        throw new Error("USer data is not valid")
    }
    res.json({message: "register the user"})
})


// desc login contacts
// route post /api/contacts
//acces public


const loginUser=ayncHandler(async(req,res) => {
    res.json({message: "login the user"})
})


// desc current contacts
// route get /api/contacts
//acces private


const currentUser=ayncHandler(async(req,res) => {
    res.json({message: "current the user"})
})


module.exports={registerUser,loginUser,currentUser}