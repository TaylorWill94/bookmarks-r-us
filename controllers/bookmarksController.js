// bookmarksController.js
// Dependencies
const express = require("express");
// Files
const bookmarksArray = require("../models/bookmark");

// `.Router` creates a new controller
// that handles a sub-route.
// In this case, it will handle everything
// that starts with `/bookmarks`.
const bookmarks = express.Router();

// Routes
// The "/bookmarks" part of the route is already assumed because app.js
// has delegated it to us with its `app.use` line. So we just need "/"
// as our route here, and it's still /bookmarks.
bookmarks.get("/", (request, response) => {
  console.log("GET request to /bookmarks");
  response.json(bookmarksArray);
});

bookmarks.get("/:index", (request, response) => {
  if (bookmarksArray[request.params.index]) {
    response.json(bookmarksArray[request.params.index]);
} else {
  response.status(404).json({ error: 'Resource not found'});
 }});

// Create one Bookmark
// POST /bookmarks
// A request to POST | bookmarks will need to include
// What to ADD
// request.body does NOT handle JSON
// refer to app.js for the app.use()

// TASK:
// Get the new bookmark ('request.body') into our array of bookmarks.
// send back the whole bookmarks array as JSON.
// BONUS: send a 201 ('Created') HTTP status codes

bookmarks.post('/', (request, response) => {
  response.send(bookmarksArray.push(request.body));
  response.status(201).json(request.body);
})


// Export the bookmarks controller/router
// so that `app` can delegate the `/bookmarks`
// route to it.
module.exports = bookmarks;
