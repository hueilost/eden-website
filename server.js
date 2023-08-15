const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

// Create static dir
app.use(express.static(path.join("./static/")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { variable: "lol" });
});

// Start the server
app.listen(PORT, () => {
  console.log("Server started listening on port " + PORT);
  console.log(`http://127.0.0.1:${PORT}`);
});
