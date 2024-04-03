import {Repository} from 'sequelize-typescript';

import CsvModel from './csv.model';
import {ICsvBusiness} from './csv.business';

export interface ICsvService {
  storeData(): Promise<void>;
}

class CsvService implements ICsvService {
  private repository;
  private business;

  constructor(_repository: Repository<CsvModel>, _business: ICsvBusiness) {
    this.repository = _repository;
    this.business = _business;
  }

  public async storeData(): Promise<void> {
    const data = await this.business.parseCsv();

    await this.repository.bulkCreate(data);
  }
}

export default CsvService;
