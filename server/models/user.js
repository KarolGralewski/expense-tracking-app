const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  netBalance: [{ amount: Number, date: Date }],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: `${process.env.TOKENEXPIRATIONTIME}`,
  });
  return token;
};

const User = mongoose.model('User', userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label('firstName'),
    lastName: Joi.string().required().label('lastName'),
    email: Joi.string().email().required().label('Email'),
    password: passwordComplexity().required().label('Password'),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
