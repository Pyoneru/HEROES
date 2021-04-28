import {Injectable} from '@angular/core';
import {Hero} from "../model/hero";
import {HttpClient} from "@angular/common/http";
import {CRUDService} from "./CRUDService";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TestService implements CRUDService{

  /**
   * Heroes 'db'
   */
  heroes: Hero[] = [];

  idCounter: number = 0;

  constructor(private http: HttpClient) {
    this.loadTestData().then(data => {
      let arrHero: Hero[] = data as Hero[];
      for(let hero of arrHero){
        this.create(hero);
      }
    });
  }

  loadTestData(): Promise<any> {
    return this.http.get("/assets/data.json").toPromise();
  }

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
    let hero = this.heroes.find(h => h.id == id);
    if(hero == null){
      return Promise.resolve(null);
    }
    return Promise.resolve(hero);
  }

  /**
   * Add hero to hero list
   * @param hero
   */
  create(hero: Hero): Promise<any>{
    hero.id = this.idCounter;
    this.idCounter++;
    this.heroes.push(hero);
    return Promise.resolve(hero.id);
  }

  /**
   * Update hero name with given id.
   * @param id
   * @param heroName
   */
  update(id: number, heroName: string): Promise<any>{
    let hero = this.heroes.find(hero => hero.id === id);
    if(hero == null){
      return Promise.resolve(throwError("Not found with id: " + id))
    }
    return Promise.resolve("Updated")
  }

  /**
   * Delete hero by his id from list and clear list from null element.
   * @param id
   */
  delete(id: number): Promise<any> {
    let hero: Hero = this.heroes.find(h => h.id === id);
    const index = this.heroes.indexOf(hero, 0);
    if(index > -1){
      delete this.heroes[index];
      this.heroes = this.heroes.filter(hero => {return hero != null});
    }
    return Promise.resolve("deleted");
  }
}
