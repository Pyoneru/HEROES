import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CRUDService} from "./CRUDService";
import {Hero} from "../model/hero";

@Injectable({
  providedIn: 'root'
})
export class ApiService implements CRUDService {

  private baseEndpoint = '/api/heroes';
  private format = '.json';

  constructor(private http: HttpClient) {
  }

  getAll(): Promise<Hero[]> {
    return this.http.get<Hero[]>(this.getUrl()).toPromise();
  }

  getById(id: number): Promise<Hero> {
    return this.http.get<Hero>(this.getUrl('/' + id)).toPromise();
  }

  create(hero: Hero): Promise<Hero> {
    return this.http.post<Hero>(this.getUrl(), hero).toPromise();
  }

  update(id: number, hero: Hero): Promise<Hero> {
    return this.http.put<Hero>(this.getUrl('/' + id), hero).toPromise();
  }

  delete(id: number): Promise<Hero> {
    return this.http.delete<Hero>(this.getUrl('/' + id)).toPromise();
  }

  getUrl(between: string = ''){
    return this.baseEndpoint + between + this.format;
  }
}
