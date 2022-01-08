const express = require("express");
const conectDB = require("./db/conectDB");
const errorHandler = require("./midWare/errorHandler");
const notFound = require("./midWare/not-found");
const route = require("./routes/route");
require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

const port = process.env.PORT;
const uri = process.env.URI;

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/v1/products", route);
app.get("/", (req, res) => res.send("Home Page"));
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await conectDB(uri);
    app.listen(port, console.log(`server is running on port : ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
