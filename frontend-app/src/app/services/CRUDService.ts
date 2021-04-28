import {Hero} from "../model/hero";

export interface CRUDService {

  getAll(): Promise<Hero[]>;

  getById(id: number): Promise<Hero>;

  create(hero: Hero): Promise<any>;

  update(id: number, name: string): Promise<any>;

  delete(id: number): Promise<any>;

}
