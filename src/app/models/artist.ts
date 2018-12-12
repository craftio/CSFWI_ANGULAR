import { Genre } from './genre';

export class Artist {
  _id: string;
  name: string;
  age: number;
  genres: Genre[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
