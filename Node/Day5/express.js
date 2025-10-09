const express = require("express");
const app = express();

const data = {
  users: [
    { id: 101, name: "xyz" },
    { id: 102, name: "abc" },
    { id: 103, name: "pqr" }
  ]
};


app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = data.users.find(u => u.id === id);

  if (user) {
    res.json({
      message: "successfully found",
      data: user
    });
  } else {
    res.json({
      message: "not found",
      status: 404
    });
  }
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});