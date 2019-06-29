import { Component } from '@angular/core';
import { HeroTableComponent } from './hero-table/hero-table.component';
import {PlayerTableComponent} from './player-table/player-table.component';
import {MatchesTableComponent} from './matches-table/matches-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 4;
  title = 'Dota Teams Search';

  constructor()
  {
    
  }

  ngOnInit() {
  }
}
