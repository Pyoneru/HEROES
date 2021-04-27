import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeroRoutesModule} from "./hero-routes/hero-routes.module";
import { NavComponent } from './nav/nav.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {TestService} from "./services/test.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeroRoutesModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
