import {Hero} from "../model/hero";

export interface CRUDService {

  /**
   * Return all heroes
   */
  getAll(): Promise<Hero[]>;

  /**
   * Return hero with given id
   * @param id
   */
  getById(id: number): Promise<Hero>;

  /**
   * Return created hero
   * @param hero
   */
  create(hero: Hero): Promise<Hero>;

  /**
   * Return updated Hero
   * @param id
   * @param hero
   */
  update(id: number, hero: Hero): Promise<Hero>;

  /**
   * Return deleted hero
   * @param id
   */
  delete(id: number): Promise<Hero>;

}
