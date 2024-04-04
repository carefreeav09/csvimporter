import { Repository } from "sequelize-typescript";

import CsvModel from "./csv.model";
import { ICsvBusiness } from "./csv.business";
import { IResult } from "./csv.type";

export interface ICsvService {
  storeData(filePath: string, headers: string[]): Promise<void>;
}

class CsvService implements ICsvService {
  private repository;
  private business;

  constructor(_repository: Repository<CsvModel>, _business: ICsvBusiness) {
    this.repository = _repository;
    this.business = _business;
  }

  public async storeData(filePath: string, headers: string[]): Promise<void> {
    const data = await this.business.parseCsv<IResult>(filePath, headers);

    await this.repository.bulkCreate(data);
  }
}

export default CsvService;
