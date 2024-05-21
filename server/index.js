const mongoose = require("mongoose");
const User = require("./models/User");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mongoUrl = ""
mongoose.connect(mongoUrl);

app.post("/signup", async (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
  console.log("user created");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ message: "Success" });
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
