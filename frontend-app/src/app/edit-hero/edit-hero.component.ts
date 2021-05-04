import { Component, OnInit } from '@angular/core';
import {Hero} from "../model/hero";

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  tableColumnId: string = "#";
  tableColumnDetails: string = "Hero Details";

  hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  saveHero() {

  }

  deleteHero() {

  }
}
