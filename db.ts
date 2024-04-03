import {Sequelize} from 'sequelize-typescript';
import CsvModel from './csv/csv.model';

const dbConfig = {
  dbName: process.env.DB_NAME || 'csvimporter',
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'root',
  dbHost: process.env.DB_HOST || 'localhost',
};

const DataBaseSetup = new Sequelize({
  database: dbConfig.dbName,
  dialect: 'postgres',
  username: dbConfig.dbUser,
  password: dbConfig.dbPassword,
  logging: false,
  models: [CsvModel],
  repositoryMode: true,
  host: dbConfig.dbHost,
});

export default DataBaseSetup;
