const express = require("express");
const app = express();

app.use(express.json()); // Middleware do obsługi JSON

app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});

// const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Serwer działa na http://localhost: 3000`);
});
