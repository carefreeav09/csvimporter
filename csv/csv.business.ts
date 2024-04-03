import csv from 'csv-parser';
import fs from 'fs';

import {headers, type IResult} from './csv.type';

export interface ICsvBusiness {
  parseCsv(): Promise<IResult[]>;
}

export default class CsvBusiness implements ICsvBusiness {
  public async parseCsv(): Promise<IResult[]> {
    const results: IResult[] = [];

    return new Promise((resolve, reject) => {
      try {
        fs.createReadStream('csv100.csv')
          .pipe(
            csv({
              headers: headers,
            })
          )
          .on('data', (data: any) => results.push(data))
          .on('end', () => {
            results.forEach((result) => {
              delete result.id;
            });
            resolve(results);
          });
      } catch (err) {
        console.log('csv file not found');
      }
    });
  }
}
