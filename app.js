const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const { strict } = require("assert");

const { navigationRouter } = require("./routes/home");
const { userRouter } = require("./routes/user");
const { g2Router } = require("./routes/g2");
const { gRouter } = require("./routes/g");
const ejs = require("ejs");

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.app.use("/public", express.static(path.join(__dirname, "public")));
    this.app.use(express.json({ strict: false }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.set("view engine", "ejs");
    this.app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
      })
    );
    this.initializeDatabase();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.use("/", navigationRouter);
    this.app.use("/user", userRouter);
    this.app.use("/g2", g2Router);
    this.app.use("/g", gRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  initializeDatabase() {
    require("./db/config");
  }
}

const app = new App();
app.listen();
