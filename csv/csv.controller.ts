import {Response, Request, NextFunction} from 'express';
import {csvService} from '.';

class CsvController {
  async parseCsv(req: Request, res: Response, next: NextFunction) {
    try {
      await csvService.storeData();

      return res.status(200).json({
        data: null,
        message: 'Data stored successfully!',
        status: 200,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default CsvController;
