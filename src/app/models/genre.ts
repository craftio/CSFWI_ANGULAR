module GenreEnums {
  export enum _origin {
    'NORTH-AMERICA',
    'SOUTH-AMERICA',
    'WEST-EUROPE',
    'EAST-EUROPE',
    'AFRICA',
    'MIDDLE-EAST',
    'WEST-ASIA',
    'EAST-ASIA',
    'SOUTH-ASIA',
    'OCEANIA',
    'UNKNOWN'
  }

  export enum _popularity {
    'HIGH',
    'MEDIUM',
    'LOW',
    'FRESH'
  }
}

export class Genre {
  _id: string;
  name: string;
  description: string;
  origin: GenreEnums._origin;
  popularity: GenreEnums._popularity;

  constructor(name: string, description: string, origin: string, popularity: string) {
    this.name = name;
    this.description = description;
    this.origin = GenreEnums._origin[origin];
    this.popularity = GenreEnums._popularity[popularity];
  }
}
