import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TestService} from "../services/test.service";
import {RouterTestingModule} from "@angular/router/testing";
import {Hero} from "../model/hero";
import {HttpClientModule} from "@angular/common/http";

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let service: TestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [TestService],
      declarations: [ HeroListComponent ]
    })
    .compileComponents();

    service = TestBed.inject(TestService);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
