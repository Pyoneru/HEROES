import { Injectable } from '@angular/core';
import {Hero} from "../model/hero";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  /**
   * Heroes 'db'
   */
  heroes: Hero[] = [];

  idCounter: number = 0;

  constructor() { }

  /**
   * Get all heroes
   */
  getAll(): Promise<Hero[]>{
    return Promise.resolve(this.heroes);
  }

  /**
   * Get one hero by id
   * @param id
   */
  getById(id: number): Promise<Hero>{
    return this.getAll().then( heroes => heroes.find(hero => hero.id === id));
  }

  create(hero: Hero): void{
    hero.id = this.idCounter;
    this.idCounter++;
    this.heroes.push(hero);
  }

  update(id: number, heroName: string): void{
    this.heroes.find(hero => hero.id === id).name = heroName;
  }

  delete(id: number): void{
    let hero: Hero = this.heroes.find(h => h.id === id);
    const index = this.heroes.indexOf(hero, 0);
    if(index > -1){
      delete this.heroes[index];
      this.heroes = this.heroes.filter(hero => {return hero != null});
    }
  }
}
