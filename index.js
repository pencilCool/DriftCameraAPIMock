const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

const { catalog } = require("./catalog");

app.use(express.static(__dirname + "/SDCard"));

app.get("/cgi-bin/foream_mediainfo", (req, res) => {
  res.json(catalog);
});

// custom 404 page
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});
// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});
app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  )
);

axios
  .get("http://localhost:3000/cgi-bin/foream_mediainfo")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
