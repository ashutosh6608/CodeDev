const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://prabhatagrahari629:BloqRy3VrJuFy7SC@codedev.rzaxrpo.mongodb.net/CodeDev"
  );
};

   module.exports = connectDB;
