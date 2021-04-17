const express = require("express");
const path = require("path");

const app = express();
const port = 5050;

// app.use(express.static(path.join(__dirname + "../Client/public")));

// app.get("/", (req, res) => {
//     res.send("Hello human")
// });

app.listen(process.env.PORT || port, function () {
    console.log("Server Started on port " + port);
});