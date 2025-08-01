const adminAuth = (req,res,next) => {
     const token = "xyz";
     const isAdminAuthorized = token == "xyz";
     if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");
     }
     else {
        next();
     }
 };
 module.exports = {
    adminAuth,
 };

 const userAuth = (req,res,next) => {
    console.log("user auth is getting checked!!");
     const token = "xyz";
     const isAdminAuthorized = token == "xyz";
     if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");
     }
     else {
        next();
     }
 };
 module.exports = {
    adminAuth,
    userAuth
 };
