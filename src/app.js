const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

// convert json file to read for
app.use(express.json());

app.post("/signup", async (req,res) => {
   console.log(req.body);
// creating a new instance of the User Model
const user = new User( {
    firstName : "Virat",
    lastName : "Agrahari",
    emailId : "virat@gmail.com",
    password : "virat@123"
  });
   try{
    await user.save();
    res.send("User Added successfully!");
   }
   catch(err){
    res.status(400).send("Error saving the user:" + err.message);
   }
 
});

//get all the users from email
 app.get("/user", async(req,res) => {
  const userEmail = req.body.emailId;
  try{
    console.log(userEmail);
    const user = await User.findOne({emailId: userEmail});
    if(!user){
      res.status(404).send("User not found");
    }
    else {
      res.send(user);
    }
  
//   const userEmail = req.body.emailId;

//   try {
//    const users = await User.find({emailId: userEmail});
//    if(users.length === 0){
//        res.status(404).send("User not found");
//    }
//    else {
//       res.send(users);
//    }
   
  }  catch(err) {
    res.status(400).send("Something went wrong")
  }
 });


 // fees API-GET /ffed - get all the users from the database
 app.get("/feed", async(req,res) => {
     try {
        const users = await User.find({});
        res.send(users);
     }
     catch(err){
      res.status(400).send("Something went wrong");
     }
 });

// delete user by id
app.delete("/user", async(req,res) => {
  const userId = req.body.userId;
  try{
      const user = await User.findByIdAndDelete(userId);
      res.send("User deleted Successfully");
  } catch(err){
    res.status(400).send("Something went wrong");
  }
});
 
// update data of the user
app.patch("/user", async(req,res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({_id: userId}, data);
    res.send("User updated successfully");
  }   catch(err){
    res.status(400).send("Something went wrong");
  }
})

connectDB()
  .then(() => {
    console.log("✅ Database connection established..");
  app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777..");
});
  })
  .catch((err) => {
    console.error("❌ Database cannot be connected!!", err);
  });
 
  



