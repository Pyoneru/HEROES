import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";

const heroRoutes: Routes = [
  // Default page
  {
    path: '',
    redirectTo: '#',
    pathMatch: "full"
  },
  // Hero List path
  {
    path: "#",
    component: AppComponent // ToDo: Change Component for Hero List component
  },
  // New/Edit hero path
  {
    path: '#/hero/:id',
    component: AppComponent // ToDo: Change Component for New/Edit Hero component.
  },
  // Error path
  {
    path: '**',
    component: AppComponent // ToDo: Change Component for Error component.
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(heroRoutes)
  ]
})
export class HeroRoutesModule { }
