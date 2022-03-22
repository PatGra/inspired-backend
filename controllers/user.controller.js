const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function userRegistration(req, res) {
  let { projectName, author, measurement, startDate, description,  password} = req.body;
  if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]).{8,}$/.test(
      password
    )
  ) {
    res
      .status(400)
      .send(
        'Password should contain number, uppercase, lowercase, special character.'
      );
    return;
  }
  const checkUser = await User.findOne({ projectName: projectName});
  if (checkUser) {
    res.status(400).send('User already exists');
    return;
  }
  password = await bcrypt.hash(password, 10);
  try {
    await User.create({ projectName, author, measurement, startDate, description, password});

    res.status(201).send('created');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}


async function logIn (req, res) {
  const { projectName, password } = req.body;
  const user = await User.findOne({ projectName: projectName }).select('+password');
  try {
    if (!user) {
      res.status(404).send('User not found');
    }
    const newPassword = await bcrypt.compare(password, user.password);
    if (newPassword === true) {
      res.status(200).send('Login successful');
    } else {
      res.status(404).send('Wrong password');
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getUser(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);
  try {
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { userRegistration, logIn, getUser };
