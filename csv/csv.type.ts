export interface IResult {
  id?: string;
  name: string;
  username: string;
  price: string;
  number2: string;
  number3: string;
  number4: string;
  location: string;
  type: string;
  percentage: string;
}

//
const headers = [
  'id',
  'name',
  'username',
  'price',
  'number2',
  'number3',
  'number4',
  'location',
  'type',
  'percentage',
];

export type IHeaders = typeof headers;
export {headers};
