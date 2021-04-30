import {Component, OnInit} from '@angular/core';
import {TestService} from "./services/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service: TestService) {
  }

  ngOnInit(): void {
    this.service.loadTestData()
      .then(heroes => {
        heroes.forEach(hero => {
          hero.id = this.service.idCounter;
          this.service.idCounter++;
          this.service.heroes.push(hero);
        });
      }).catch(error => console.log(error));
  }


}
