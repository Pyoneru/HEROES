import {Component, DoCheck, OnInit} from '@angular/core';
import {Hero} from "../model/hero";
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit, DoCheck{
  // Text to display inside template.
  tableColumnId: string = "#";
  tableColumnName: string = "Name";
  tableColumnAction: string = "Action";

  // Hero list
  heroes: Hero[] = [];

  // Flag to checking if any hero was deleted.
  isDeleted: boolean = false;

  /**
   * Inject service to CRUD operation for heroes and router to navigate
   * @param service
   * @param router
   */
  constructor(
    private service: ApiService,
    private router: Router
  ) {}

  /**
   * Load heroes from service
   */
  ngOnInit(): void {
    this.service.getAll().then(data => {
      this.heroes = data
    });
  }

  /**
   * Delete heroes from DB, clear list from null elements to avoid error and set isDeleted flag to true
   * @param hero
   */
  deleteHero(hero: Hero) {
    this.service.delete(hero.id)
      .then( () => {
          console.log('Deleted hero', hero);
          let index = this.heroes.indexOf(hero);
          if(index > -1){
            this.heroes.splice(index, 1);
          }
          this.heroes = this.heroes.filter(hero => {return hero != null}); // Clear list to avoid a error in console logs.
          this.isDeleted = true;
      })
      .catch(error => console.log(error));


  }

  /**
   * Navigate to edit hero
   * @param hero
   */
  editHero(hero: Hero) {
    this.router.navigate(['/hero', hero.id]).then(
      r => {
        console.log("Successfully navigate to /hero/" + hero.id);
      },
      error => {
        console.log("Can not navigate to /hero" + hero.id);
      }
      );
  }

  /**
   * Reload hero list if any element was deleted
   */
  ngDoCheck(): void {
    if(this.isDeleted){
      this.isDeleted = false;
      this.service.getAll().then(data => {
        this.heroes = data
      });
    }
  }
}
