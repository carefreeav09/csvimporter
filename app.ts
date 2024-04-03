import csv from "csv-parser";
import fs from "fs";
const results = [];

//
const headers = [
  "id",
  "name",
  "username",
  "price",
  "number2",
  "number3",
  "number4",
  "location",
  "type",
  "percentage",
];

//

const stream = fs
  .createReadStream("csv100.csv")
  .pipe(
    csv({
      headers: headers,
    })
  )
  .on("data", (data: any) => results.push(data));

export default stream;
