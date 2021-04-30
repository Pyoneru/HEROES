import {TestBed} from '@angular/core/testing';

import { TestService } from './test.service';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {Hero} from "../model/hero";

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TestService]
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test data are loaded', (done) => {
    const heroNames = [
      "Red Hero",
      "Green Hero",
      "Blue Hero",
      "Alpha Hero",
      "Magenta Hero",
      "Gold Hero",
      "Orange Hero",
      "White Hero",
      "Black Hero",
      "Silver Hero"
    ];
    serviceLoadData(service)
      .then(data => {
        let isLoaded = true;
        // Check every element at list
        data.forEach(hero => {
          if (!heroNames.includes(hero.name)){
            isLoaded = false;
          }
        })
        expect(isLoaded).toBeTrue();
        done();
      });
  });

  it('added hero should not has id equal -1', (done) => {
    const hero: Hero = {
      id: -1,
      name: 'Yellow Hero'
    }
    // Do not read heroes from file
    service.create(hero)
      .then(saved => {
        expect(saved.id).not.toBe(-1);
        done();
      });
  });

  it('"Create" method should add hero to heroes list', (done) => {
    const newHero: Hero = {
      id: -1,
      name: 'Dark Red Color'
    }
    // Do not read heroes from file
    service.create(newHero)
      .then(saved => {
        expect(service.heroes.includes(saved)).toBeTrue();
        done();
      })
  })

  it('new added hero should has id equal to idCounter', (done) => {
    const newHero: Hero = {
      id: -1,
      name: 'Dark Red Color'
    }

    // Do not read heroes from file
    const idCounter: number = service.idCounter;
    service.create(newHero)
      .then(saved => {
        expect(saved.id).toBe(idCounter);
        done();
      });
  });

  it('updated hero should be changed', (done) => {
    serviceLoadData(service)
      .then(heroes => {
        const id: number = heroes[2].id;
        const newName: string = "New Color Hero";
        service.update(id, newName)
          .then(hero => {
            // update return updated hero but not from list, that why i use service.heroes
            expect(service.heroes[2].name).toEqual(newName);
            done();
          });
      })
  });

  it('get hero with bad id should throw error', (done) => {
    serviceLoadData(service)
      .then(heroes => {
        const badId: number = 1000;
        service.getById(badId)
          .catch( error => {
            expect(error.message).toEqual(service.errorMessage + badId);
            done();
          })
      })
  });

  it('deleted hero should be removed from array', (done) => {
    serviceLoadData(service)
      .then(heroes => {
        const id: number = heroes[4].id;
        const name: string = heroes[4].name;

        service.delete(id)
          .then(hero => {
            expect(service.heroes.find(h => h.name === name)).not.toBeTruthy();
            done();
          });
      })
  });
});


function serviceLoadData(service: TestService): Promise<Hero[]>{
  return new Promise((resolve, reject) => {
    service.loadTestData()
      .then(data => {
        const heroes: Hero[] = data as Hero[];
        for (const hero of heroes){
          hero.id = service.idCounter;
          service.idCounter++;
          service.heroes.push(hero);
        }
        resolve(service.heroes);
      })
      .catch(error => {
        reject(null);
      });
  });
}
