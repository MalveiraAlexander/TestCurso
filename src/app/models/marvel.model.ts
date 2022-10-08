export class Ability {
  name: string;
  description: string;
}

export class Heroe {
  name: string;
  description: string;
  picture: string;
  abilities: Ability[];
}

export class Person {
  name: string;
  lastName: string;
  age: number;
  heroe: Heroe;
}


export interface AbilityResponse {
  id: number;
  name: string;
  description: string;
}

export interface HeroeResponse {
  id: number;
  name: string;
  description: string;
  picture: string;
  abilities: AbilityResponse[];
}

export interface PersonResponse {
  id: number;
  name: string;
  lastName: string;
  age: number;
  heroe: HeroeResponse;
  createAt: Date;
  updateAt: Date;
}
