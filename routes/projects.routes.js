const express = require('express');
const { Router } = require('express');
const updateProject = require ('../controllers/updateProject.controller.js')
const getAllProjects = require ('../controllers/getAllProjects.controller.js')

const router = new Router();
//router.put ("/update/:id", updateProject);
router.route('/update/:projectName').put(updateProject);
router.route('/allProjects').get(getAllProjects);

module.exports = router;
