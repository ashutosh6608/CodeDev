const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://prabhatagrahari629:BloqRy3VrJuFy7SC@codedev.rzaxrpo.mongodb.net/CodeDev"
  );
};

connectDB()
  .then(() => {
    console.log("✅ Database connection established..");
  })
  .catch((err) => {
    console.error("❌ Database cannot be connected!!", err);
  });
