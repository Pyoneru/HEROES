import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import {Hero} from "../model/hero";

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add hero', () => {
    // Add new hero
    let hero: Hero = {
      id: -1,
      name: 'Hero'
    }
    service.create(hero);

    expect(service.heroes.length).toBe(1);
  })

  it('new added hero should has id equal to idCounter', () =>{
    let idCounter: number = service.idCounter;
    // Add new hero
    let hero: Hero = {
      id: -1,
      name: 'Hero'
    }
    service.create(hero);

    expect(idCounter).toBe(hero.id);
  })

  it('updated hero should be changed', () =>{
    let idCounter: number = service.idCounter;

    // Add new hero
    let newHero: Hero = {
      id: -1,
      name: 'Hero'
    }
    service.create(newHero);

    // Change name
    newHero.name = 'New Hero';
    service.update(idCounter, newHero.name);

    // Get hero
    let hero: Hero;
    service.getById(idCounter).then(data => {
      hero = data;
      expect(newHero.name).toEqual(data.name);
    });
  })

  it('deleted hero should be removed from array', () =>{
    let idCounter: number = service.idCounter;
    // Add new hero
    let hero: Hero = {
      id: -1,
      name: 'Hero'
    }
    service.create(hero);

    service.delete(hero.id);
    expect(service.heroes.length).toBe(0);
  })
});
