import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeroRoutesModule} from "./hero-routes/hero-routes.module";
import { NavComponent } from './nav/nav.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { IdNaNPipe } from './pipe/id-na-n.pipe';
import {FormsModule} from "@angular/forms";
import { ErrorPageComponent } from './error-page/error-page.component';
import {ApiService} from "./services/api.service";
import {BaseUrlInterceptor} from "./interceptor/base-url.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroListComponent,
    EditHeroComponent,
    IdNaNPipe,
    ErrorPageComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HeroRoutesModule,
        FormsModule
    ],
  providers: [ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
