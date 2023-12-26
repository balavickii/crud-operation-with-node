const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required:[true, "pls add user name"],

    },
    email : {
        type: String,
        required:[true,"pls add email addres"],
        unique:[true,"Email addres is already used"],

    },
    password: {
        type: String,
        required: [true,"pls add the password"]
    },

 }, 
    {
        timestamps:true,
    }
)


module.exports=mongoose.model("user",userSchema)