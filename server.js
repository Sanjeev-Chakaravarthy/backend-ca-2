const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;


app.use(bodyParser.json());


const users = [
  { id: 1, username: "JohnDoe", email: "john@example.com", password: "mypassword123", dob: "1995-06-15" },
  { id: 2, username: "JaneSmith", email: "jane@example.com", password: "securepass456", dob: "1998-09-22" }
];


app.get("/users", (req, res) => {
  res.status(200).json({ message: "Users retrieved successfully", users });
});


app.post("/signup", (req, res) => {
  const { username, email, password, dob } = req.body;


  if (!username) {
    return res.status(400).json({ error: "Username cannot be empty" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email cannot be empty" });
  }
  if (!password || password.length < 8 || password.length > 16) {
    return res.status(400).json({
      error: "Password length should be greater than 8 or less than or equal to 16",
    });
  }
  if (!dob) {
    return res.status(400).json({ error: "Date of Birth cannot be empty" });
  }

  const newUser = { id: users.length + 1, username, email, password, dob };
  users.push(newUser);
  console.log("New user created:", newUser);

  res.status(201).json({ message: "Signup successful", user: newUser });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
