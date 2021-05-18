const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection
    .once("open", () => {
        console.log("MongoDB connection established");
    })
    .on("error", function (err) {
        console.log(err);
    });

const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/dashboard", dashboardRouter);

app.listen(port, () => {
    console.log("Port: " + port);
});
