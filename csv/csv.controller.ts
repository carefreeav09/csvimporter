import {Response, Request, NextFunction} from 'express';
import {csvService} from '.';
import parseCsv from '../utils/parseCSV';
import {IResult} from './csv.type';

class CsvController {
  async parseDataFromFilePath(req: Request, res: Response, next: NextFunction) {
    try {
      const file = req.file; // Access the file data
      const {headers} = req.body;

      if (!file) {
        throw new Error('No file uploaded');
      }

      //
      const data = await parseCsv(file.path, headers);

      //
      await csvService.storeData(data as IResult[]);

      //
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
