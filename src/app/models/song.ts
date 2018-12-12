import { Genre } from './genre';
import { Artist } from './artist';

export class Song {
  _id: string;
  name: string;
  length_s: number;
  bpm: number;
  genre: Genre;
  artists: Artist[];
  releasedate: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
