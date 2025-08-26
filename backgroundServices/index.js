const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const mongoose = require("mongoose");
const { sendWelcomeEmail } = require("./emailService/WelcomeEmail");
const {SendParcelDeliveredEmail } = require("./emailService/DeliveredParcel");
const { SendParcelPendingEmail } = require("./emailService/PendingParcel");
dotenv.config();

// db connection
const DB = process.env.DB;
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((e) => {
    console.log(e);
  });

// task schedular
const run = () => {
  cron.schedule("* * * * * *", () => {
    sendWelcomeEmail();
      SendParcelDeliveredEmail();
    SendParcelPendingEmail();
  });
};

run();
// server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Backgroundservices is dancing 🤩 on port  ${PORT}`);
});
