import { Response, Request, NextFunction } from "express";
import { csvService } from ".";

class CsvController {
  async parseDataFromFilePath(req: Request, res: Response, next: NextFunction) {
    try {
      const { filePath, headers } = req.body;

      // Generic function attempt.
      await csvService.storeData(filePath, headers);

      return res.status(200).json({
        data: null,
        message: "Data stored successfully!",
        status: 200,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default CsvController;
