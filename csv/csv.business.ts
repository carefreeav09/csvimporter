import csv from 'csv-parser';
import fs from 'fs';

export interface ICsvBusiness {
  parseCsv<T>(filePath: string, headers: string[]): Promise<T[]>;
}

export default class CsvBusiness implements ICsvBusiness {
  public async parseCsv<T>(filePath: string, headers: string[]): Promise<T[]> {
    const results: T[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv({headers: headers}))
        .on('data', (data: any) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}
