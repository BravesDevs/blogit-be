const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const { strict } = require("assert");
const { router } = require("./routes/index");
class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(express.json({ strict: false }));
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
      })
    );

    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.use("/", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const app = new App();
app.listen();
