const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port${port}`);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/index.html");
});
