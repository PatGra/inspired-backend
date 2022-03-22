const User= require('../models/user.model.js');

async function getAllUsers (req,res){
    const allUsers= await User.find()
    console.log(allUsers)
    res.json(allUsers)
}

module.exports= getAllUsers;