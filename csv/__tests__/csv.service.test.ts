import {Repository} from 'sequelize-typescript';

import CsvService from '../csv.service';
import CsvModel from '../csv.model';
import {IResult} from '../csv.type';

const mockModel: any = {
  bulkCreate: jest.fn(),
};

const mockBusiness: any = {
  parseCsv: jest.fn(),
};

const mockRepository = mockModel as Repository<CsvModel>;

const csvService = new CsvService(mockRepository, mockBusiness);

describe('CsvService', () => {
  describe('storeData', () => {
    it('should store data successfully', async () => {
      const mockData: IResult[] = [
        {
          id: '1',
          name: 'Eldon Base for stackable storage shelf, platinum',
          username: 'Muhammed MacIntyre',
          price: '3',
          number2: '-213.25',
          number3: '38.94',
          number4: '35',
          location: 'Nunavut',
          type: 'Storage & Organization',
          percentage: '0.8',
        },
        {
          id: '2',
          name: 'Eldon Ring for stackable storage shelf, platinum',
          username: 'Muhammed MacIntyre',
          price: '4',
          number2: '-413.25',
          number3: '48.94',
          number4: '45',
          location: 'Aunavut',
          type: '4torage & Organization',
          percentage: '4.8',
        },
      ];

      await csvService.storeData(mockData);

      expect(mockRepository.bulkCreate).toHaveBeenCalledWith(mockData);
    });
  });
});
