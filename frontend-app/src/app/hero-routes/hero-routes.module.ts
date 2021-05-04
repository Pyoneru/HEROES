import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {HeroListComponent} from "../hero-list/hero-list.component";
import {EditHeroComponent} from "../edit-hero/edit-hero.component";

const heroRoutes: Routes = [
  // Hero List path
  {
    path: '',
    component: HeroListComponent
  },
  // New/Edit hero path
  {
    path: 'hero/:id',
    component: EditHeroComponent
  },
  {
    path: 'hero',
    component: EditHeroComponent
  },
  // Error path
  {
    path: '**',
    component: AppComponent // ToDo: Change Component for Error component.
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(heroRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutesModule { }
