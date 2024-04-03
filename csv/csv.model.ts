import {Table, Model, Column} from 'sequelize-typescript';

import type {IResult} from './csv.type';
import {Optional} from 'sequelize';

interface CsvCreationAttributes extends Optional<IResult, 'id'> {}

@Table({
  timestamps: true,
})
class Csv extends Model<IResult, CsvCreationAttributes> {
  @Column
  name: string;

  @Column
  username: string;

  @Column
  price: string;

  @Column
  number2: string;

  @Column
  number3: string;

  @Column
  number4: string;

  @Column
  location: string;

  @Column
  type: string;

  @Column
  percentage: string;
}

export default Csv;
