const express = require('express');
const {userAuth} = require("../middlewares/auth");
const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest",userAuth, async(req,res) => {
  // sending a connection request
  const user = req.user;
  console.log("Sending a connection request");

  res.send(user.firstName + " Sent a connection request ");
} );

module.exports =  requestRouter;