import { Component, OnInit } from '@angular/core';
import {Hero} from "../model/hero";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  // column names
  tableColumnId: string = '#';
  tableColumnDetails: string = 'Hero Details';

  // id name param
  idParam: string = 'id';

  // Hero object
  hero: Hero;

  constructor(private service: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}


  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        params => {
          // If params has 'id' then try get hero by id.
          if (params[this.idParam]){
            const id: number = params[this.idParam];
            this.service.getById(id)
              .then(
                hero => {
                  this.hero = hero;
                })
              .catch(
                error => {
                  console.log(error);
                  this.navigateToHeroList();
                })
          }
          // If params has not 'id', then create empty hero(no id and name).
          else{
            this.hero = new Hero();
          }
      },
      error => {
        console.log(error);
        this.navigateToHeroList();
      });
  }

  navigateToHeroList(): void{
    this.router.navigate(['/'])
      .then(data => {
        console.log('Navigate to hero list');
      })
      .catch(error => {
        console.error(error);
      })
  }

  /**
   * If hero id is not undefined, then update it, otherwise create new hero
   */
  saveHero(): void {
    // Hero has id, then update hero with this id.
    if(this.hero.id){
      this.service.update(this.hero.id, this.hero)
        .then(hero => {
          this.hero = hero;
          console.log('Updated hero: ', hero);
        })
        .catch(error => {
          console.error(error);
        });
    }
    // Hero has not id, then create new hero
    else {
      this.service.create(this.hero)
        .then(hero => {
          this.hero = hero;
          console.log('Created hero: ', hero);
        })
        .catch(error => {
          console.error(error);
        })
    }
  }
}
