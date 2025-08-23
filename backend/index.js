const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const parcelRoute = require("./routes/parcel");

dotenv.config();
const app = express();
// middlewares

app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/parcels", parcelRoute);

// database connection
const DB = process.env.DB;
mongoose
  .connect(DB)
  .then(() => {
    console.log("database performed successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT;

// server
app.listen(PORT, () => {
  console.log(`Server is dancing 🧜‍♀️ on port ${PORT}`);
});
