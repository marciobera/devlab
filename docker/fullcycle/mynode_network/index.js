const mongoose = require("mongoose");

mongoose
  .connect("mongodb://db:27017/test", {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
