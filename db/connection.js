const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

mongoose.connection.on("error", (error) => {
  console.log("MongoDB had an error connecting", error);
});
