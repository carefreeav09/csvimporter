import { Repository } from "sequelize-typescript";

import CsvService from "../csv.service";
import CsvModel from "../csv.model";

const mockModel: any = {
  bulkCreate: jest.fn(),
};

const mockBusiness: any = {
  parseCsv: jest.fn(),
};

const mockRepository = mockModel as Repository<CsvModel>;

const csvService = new CsvService(mockRepository, mockBusiness);

describe("CsvService", () => {
  describe("storeData", () => {
    it("should store data successfully", async () => {
      const filePath = "test.csv";
      const headers = ["name", "email"];

      mockBusiness.parseCsv.mockResolvedValueOnce([
        { name: "John Doe", email: "johndoe@example.com" },
      ]);

      await csvService.storeData(filePath, headers);

      expect(mockBusiness.parseCsv).toHaveBeenCalledWith(filePath, headers);

      expect(mockModel.bulkCreate).toHaveBeenCalledWith([
        { name: "John Doe", email: "johndoe@example.com" },
      ]);

      expect(mockModel.bulkCreate).toHaveBeenCalledTimes(1);
    });
  });
});
