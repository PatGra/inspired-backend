const User = require('../models/user.model.js');



async function deleteProject (req, res) {
    
    const { projectName } = req.params;
    try {
        const result = await User.deleteOne({ projectName: projectName });
        res.json(result);
    } catch (err) {
        return res.status(400).send('Nicht gefunden mit Name: '+projectName+' - '+err);
    }

};

module.exports = deleteProject;