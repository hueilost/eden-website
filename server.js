import express from "express";
import path from "path";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
// import dbConnect from "./database/DB.js";
import Routes from "./routes.js";
const app = express();
const liveReloadServer = livereload.createServer();
const PORT = 8080;

// Setup live reloading -- Document must have a <HEAD> tag for this to work
// We use a one-time event listener for this since each time we change the document(s)
// The server goes down
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.set("view engine", "ejs");
// Use this middleware
app.use(connectLiveReload());
// Create static dir
app.use(express.static(path.join("./static/")));
app.use(Routes);

// Start the server
app.listen(PORT, () => {
  console.log("Server started listening on port " + PORT);
  // Make an attempt
  // dbConnect();
  console.log(`http://127.0.0.1:${PORT}`);
});
