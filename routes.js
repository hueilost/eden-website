import express from "express";
const app = express.Router();

// It's not suggested to edit this file

// This is where we will store each one of our routes for the page
// We only need one since we have "dynamic paging"

app.get("/:route(*)", (req, res) => {
  const route = req.params.route || "index"; // Catch index as well
  // Get the query string and pass it as a parameter
  const queryString = req.originalUrl;
  const urlObj = new URL(`http://localhost${queryString}`); // Create URL object

  // const routeSegments = route.split("/");
  // Render the routes dynamically
  // Make the query parameters accessible using the 'params' variable
  res.render("root", { route, params: urlObj.searchParams });
});

export default app;
