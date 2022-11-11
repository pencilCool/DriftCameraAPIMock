const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;
console.log(__dirname);
app.use(express.static(__dirname + "/SDCard"));

app.get("/cgi-bin/foream_mediainfo", (req, res) => {
  res.json({
    files: [
      {
        path: "DCIM\\100MEDIA\\VID00001.MP4",
        size: 7572065,
        name: "8500005394_1665385272",
        time: "2021-03-02 23:58:13",
      },
      {
        path: "DCIM\\100MEDIA\\VID00002.MP4",
        size: 7572065,
        name: "8500005394_1665385336",
        time: "2021-03-02 23:59:38",
      },
      {
        path: "DCIM\\100MEDIA\\VID00003.MP4",
        size: 7572065,
        name: "8500000001_16653455654",
        time: "2021-03-02 23:59:38",
      },
      {
        path: "DCIM\\100MEDIA\\VID00004.MP4",
        size: 7572065,
        name: "8500000001_16653855654",
        time: "2021-03-02 23:59:38",
      },
      {
        path: "DCIM\\100MEDIA\\VID00005.MP4",
        size: 7572065,
        name: "8500000002_16633855654",
        time: "2021-03-02 23:59:38",
      },
      {
        path: "DCIM\\100MEDIA\\VID00006.MP4",
        size: 7572065,
        name: "8500000002_16635855654",
        time: "2021-03-02 23:59:38",
      },
    ],
  });
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
