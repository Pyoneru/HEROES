import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Hero} from "../model/hero";
import {TestService} from "../services/test.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit{

  heroes: Hero[];

  constructor(private test: TestService) { }

  ngOnInit(): void {
    this.test.getAll().then(data => {
      this.heroes = data
    });
  }

  deleteHero(hero: Hero) {
    console.log('delete' + hero.id)
  }

  editHero(hero: Hero) {
    console.log('edit' + hero.id)
  }
}
