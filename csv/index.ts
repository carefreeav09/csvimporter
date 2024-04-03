import CsvService from './csv.service';
import CsvController from './csv.controller';
import CsvBusiness, {ICsvBusiness} from './csv.business';
import dbConfig from '../db';

import CsvModel from './csv.model';

const csvRepository = dbConfig.getRepository(CsvModel);
const csvBusiness: ICsvBusiness = new CsvBusiness();

const csvService: CsvService = new CsvService(csvRepository, csvBusiness);
const csvController = new CsvController();

export {csvService, csvController};
