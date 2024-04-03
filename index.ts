import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import dbConfig from "./db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
  dbConfig
    .authenticate()
    .then(() => {
      // DataBaseSetup.sync({ alter: true });
      console.log("DB instantiated");
    })
    .catch((err) => console.log(err));
};

startServer();
