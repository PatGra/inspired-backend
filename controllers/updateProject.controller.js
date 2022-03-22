const projectModel = require('../models/user.model.js');



async function updateProject (req, res) {
    
    
    try {
        const project= req.params.projectName;
        console.log(req.body);
        const findProject = await projectModel.findOneAndUpdate(project, req.body,{
            new: true,
            runValidators: true,
            context: 'query' 
        });
        res.json(findProject);
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = updateProject;