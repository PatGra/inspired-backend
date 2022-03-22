const Project= require('../models/user.model.js');

async function getAllProjects (req,res){
    const allProjects= await Project.find()
    console.log(allProjects)
    res.json(allProjects)
}

module.exports= getAllProjects;