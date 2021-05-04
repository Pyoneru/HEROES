import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {HeroListComponent} from "../hero-list/hero-list.component";

const heroRoutes: Routes = [
  // Hero List path
  {
    path: '',
    component: HeroListComponent // ToDo: Change Component for Hero List component
  },
  // New/Edit hero path
  {
    path: 'hero/:id',
    component: AppComponent // ToDo: Change Component for New/Edit Hero component.
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
