import express from "express";
import path from "path";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import dbConnect from "./database/DB.js";
import Post from "./database/models/post.js";
const app = express();
const liveReloadServer = livereload.createServer();
const PORT = 8080;

// Setup live reloading
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Use this middleware
app.use(connectLiveReload());
// Create static dir
app.use(express.static(path.join("./static/")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { variable: "lol" });
});

// Start the server
app.listen(PORT, () => {
  console.log("Server started listening on port " + PORT);
  dbConnect();
  const x = new Post({ fromUser: "p", toUser: "k", tag: "k", content: "m" });
  x.save();
  console.log(`http://127.0.0.1:${PORT}`);
});
