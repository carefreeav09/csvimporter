import { Router } from "express";
import { csvController } from "./index";

const csvRouter = Router();

//
csvRouter.get("/csv", csvController.parseDataFromFilePath);

export default csvRouter;
