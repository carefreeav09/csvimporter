import {IResult} from '../csv/csv.type';

const fs = require('fs');
const csv = require('csv-parser');

const parseCsv = (filePath: string, headers: string[]) => {
  console.log('parseCsv', filePath, headers);
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csv(headers))
      .on('data', (data: IResult) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error: Error) => {
        reject(error);
      });
  });
};

export default parseCsv;
