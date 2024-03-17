const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const path = require('path');
const jwt = require("jsonwebtoken");
const UsersModel = require("../server/models/users.js");
const games = require('../server/games api/games.js'); 
const port = 3000;
const app = express();

require('dotenv').config();

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB connection is successful"))
  .catch((err) =>
    console.log("There is a problem in MongoDB connection ====>>>>", err)
  );

// app.use(express.static(path.join(__dirname, '/store/dist')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'store', 'dist', 'index.html'))
// })

app.get('/', cors() , async (req, res) => {
  res.json(games);
});

app.get('/gamedetails/:id', cors() , async (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = games.find(game => game.id === gameId);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: 'Game not found' });
  }
})

app.post('/signin', cors(), (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          const token = jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', {
            expiresIn: "30min",
          });
          res.status(200).json({ message: "Success", token: token, user: user });
        } else {
          res.json({ message: "The password is incorrect" });
        }
      } else {
        res.json({ message: "No record existed" });
      }
    })
    .catch(err => res.json({ message: "Error occurred", error: err }));
});

app.post('/signup', cors(), (req, res) => {
  const { image, username, email, password, password_cf } = req.body;
  UsersModel.findOne({ email: email })
    .then(existingUser => {
      if (existingUser) {
        res.json({ message: "Email already exists" });
      } else {
        if (password !== password_cf) {
          res.json({ message: "Password and confirmation password do not match" });
        } else {
          const newUser = new UsersModel({ image, username, email, password });        
          newUser.save()
            .then(savedUser => {
              res.status(201).json({ message: "User created successfully",user: savedUser });
            })
            .catch(saveErr => res.json({ message: "Error saving user", error: saveErr }));
        }
      }})
    .catch(err => res.json({ message: "Error checking existing user", error: err }));
});

app.post("/home", cors() , async (req, res) => {
  const token = req.headers.token;
  try {
    const verify = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    if (verify) {
      res.status(200).json({ message: "true" });
    }
  } catch (error) {
    res.status(404).json({ message: "false" });
  }
});

app.post("/profile", cors(), async (req, res) => {
  const token = req.headers.token;
  try {
    const verify = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    if (verify) {
      const userId = verify.userId;
      const user = await UsersModel.findById(userId);
      if (user) {
        res.status(200).json({ message: "Success", user: user});
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.put('/profile/update', cors(), async (req, res) => {
  const token = req.headers.token;
  const { username, email, image, password } = req.body; // Add more fields if needed

  try {
    const verify = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    if (verify) {
      const userId = verify.userId;
      const user = await UsersModel.findById(userId);

      if (user) {
        // Update user information
        user.username = username || user.username;
        user.email = email || user.email;
        user.image = image || user.image;
        user.password = password || user.password;

        // Save updated user
        const updatedUser = await user.save();
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});