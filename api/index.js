require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");


const sequelize = new Sequelize("stagiuvt", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});
const { User } = require("./models");
const app = express();


const port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB file size limit
  }
});

// handle file upload
app.post('/api/save', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    res.status(400).send('No file uploaded');
    return;
  }
//give the file a unique name
  fs.writeFile(`./uploads/${file.filename}.pdf`, file.buffer, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been created');
  });

  res.send('File uploaded successfully');
});


app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).send({ message: "Invalid username or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ message: "Error logging in" });
  }
});

app.post("/api/register", async (req, res) => {
  const { firstName, lastName, username, email, password, cpassword } = req.body;
  
  try {
    const existingUser = await User.findOne({ where: { username } });
    const existingEmail = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send({ message: "Username is already taken" });
    } else if (existingEmail) {
      return res.status(400).send({ message: "Email is already taken" });
    } else if (password != cpassword) {
      return res.status(400).send({ message: "Passwords do not match" });
    }
    const userid = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      id: userid,
      firstname: firstName,
      lastname: lastName,
      username: username,
      email: email,
      password: hashedPassword,
      user_role: 0,
    });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ message: "Error in the registration process" });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
