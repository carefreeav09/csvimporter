import { Sequelize } from "sequelize-typescript";

const dbConfig = {
  dbName: process.env.DB_NAME || "csvimporter",
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "root",
  dbHost: process.env.DB_HOST || "localhost",
};

const DataBaseSetup = new Sequelize({
  database: dbConfig.dbName,
  dialect: "postgres",
  username: dbConfig.dbUser,
  password: dbConfig.dbPassword,
  logging: false,
  // models: [User, Structure, SubStructure],
  repositoryMode: true,
  host: dbConfig.dbHost,
});

export default DataBaseSetup;
