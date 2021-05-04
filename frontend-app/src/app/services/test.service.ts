import {Injectable} from '@angular/core';
import {Hero} from "../model/hero";
import {HttpClient} from "@angular/common/http";
import {CRUDService} from "./CRUDService";

@Injectable({
  providedIn: 'root',
})
export class TestService implements CRUDService{

  /**
   * Heroes 'db'
   */
  heroes: Hero[] = [];

  idCounter: number = 0;

  errorMessage: string = 'Can not find hero with id: ';

  constructor(private http: HttpClient) {
    this.loadTestData().then(data => {
      const heroes: Hero[] = data as Hero[];
      heroes.forEach( hero => {
        hero.id = this.idCounter;
        this.idCounter++;
        this.heroes.push(hero);
      })
    })
  }

  loadTestData(): Promise<any> {
    return this.http.get('/assets/data.json').toPromise();
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
    return new Promise<Hero>((resolve, reject) => {
      const hero = this.heroes.find(h => h.id == id);
      if (hero){
        return resolve(hero);
      }else{
        reject(new Error(this.errorMessage + id));
      }
    });
  }

  /**
   * Add hero to hero list
   * @param hero
   */
  create(hero: Hero): Promise<Hero>{
    return new Promise((resolve) => {
      hero.id = this.idCounter;
      this.idCounter++;
      this.heroes.push(hero);
      resolve(hero);
    });
  }

  /**
   * Update hero name with given id.
   * @param id
   * @param heroName
   */
  update(id: number, heroName: string): Promise<Hero>{
    return new Promise((resolve, reject) => {
      const hero = this.heroes.find(h => h.id === id);
      if (hero){
        hero.name = heroName;
        resolve(hero);
      }else{
        reject(new Error(this.errorMessage + id));
      }
    });
  }

  /**
   * Delete hero by his id from list and clear list from null element.
   * @param id
   */
  delete(id: number): Promise<Hero> {
    return new Promise((resolve, reject) => {
      const hero = this.heroes.find(h => h.id === id);
      if (hero){
        const index = this.heroes.indexOf(hero, 0);
        // if hero was found before, then i do not check index is bigger then -1
        delete this.heroes[index];
        // filters array from null elements
        this.heroes = this.heroes.filter(h => hero != null);
        resolve(hero);
      }else{
        reject(new Error(this.errorMessage + id));
      }
    });
  }
}
