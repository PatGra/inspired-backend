const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    projectName: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    measurement: {
      type: String,
    },
    startDate: {
      type: Number
    },
    description: {
      required: true,
      type: String,
    },
    documentation: {
      type: String,
    },
    password: {
      required: true,
      type: String,
      select: false,
    },
    token:{
      type: String
    }
  }
);


const User = model('user', userSchema);
module.exports = User;
