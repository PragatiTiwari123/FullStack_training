const express = require('express');
const app = express();


const data = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]
};


app.use(express.json());

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);                
  const index = data.users.findIndex(u => u.id === id); 
  if (index !== -1) {
    const deletedUser = data.users.splice(index, 1); 

    res.json({
      message: "Deleted successfully",
      data: deletedUser[0] 
    });
  } else {
    res.status(404).json({
      message: "User not found"
    });
  }
});


app.listen(6000, () => {
  console.log('Server running :');
});