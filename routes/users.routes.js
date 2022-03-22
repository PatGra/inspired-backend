const express = require('express');
const { Router } = require('express');
const {userRegistration, logIn} = require ('../controllers/user.controller.js')
const getAllUsers = require ('../controllers/getAllUsers.controller.js')
const updateProject = require ('../controllers/updateProject.controller.js')
const getAllProjects = require ('../controllers/getAllProjects.controller.js')

const router = new Router();


router.route('/register').post(userRegistration);
router.route('/login').post(logIn);

router.route('/update/:projectName').put(updateProject);

router.route('/allProjects').get(getAllProjects);
router.route('/allUsers').get(getAllUsers);


module.exports = router;
