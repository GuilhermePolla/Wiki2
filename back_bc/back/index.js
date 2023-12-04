const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authorRouter = require("./user/authorRoutes");
const articleRouter = require("./article/articleRouter");
const authRouter = require("./authenticator/authenticator_router");
const PORT = 3001;
app.use(bodyParser.json());
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://Wiki2:D4RnManSboUxid8R@cluster0.vzwpzon.mongodb.net/WIKI2",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection failed"));
db.once("open", function () {
  console.log("Connection successful");
});

app.use(express.json());
app.use(cors());

app.use("/author", authorRouter);
app.use("/article", articleRouter);
app.use("/authenticator", authRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
