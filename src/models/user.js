const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength : 4,
        maxLength : 50,
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        lowercase: true,
        required : true,
        unique: true,
        trim: true,
        validate(value){
          if(!validator.isEmail(value)){
            throw new Error ("Invalid email address: " + value);
          }
        },
    },
    password: {
        type: String,
        required: true,
        validate(value) {
          if(!validator.isStrongPassword(value)){
            throw new Error ("Enter a Strong Password" +  value);
          }
        },
    },
      age: {
        type: Number,
        min : 18,
      },
      gender: {
        type: String,
        validate(value){
          if(!["male", "female", "others"].includes(value)){
            throw new Error("Gender data is not valid");
          }
        },
      },
      photoUrl: {
        type: String,
        default: "https://assets.leetcode.com/users/sbham273165/avatar_1750611616.png",
        
        validate(value){
          if(!validator.isURL(value)){
            throw new Error("Invalid email address: " + value);
          }
        },
      },
      about : {
        type: String,
        default: "This is default about user",
      },
      skills: {
        type: [String],
      },
    },
    {
      timestamps: true,
    }  
  );


 userSchema.methods.getJWT = async function () {
  const user = this;
  const token = await jwt.sign({_id : user._id}, "Code@Dev000",{
      expiresIn: "1d",
 });
 return token;
};

userSchema.methods.validatePassword = async function(passwordInputByUser) {
    const user = this;
    const passwordHash = this.password;
    const isPasswordValid = await bcrypt.compare(
      passwordInputByUser,
       passwordHash
      );
      return isPasswordValid;
} 

module.exports = mongoose.model("User", userSchema);