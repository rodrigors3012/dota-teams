import { Component, Input, OnChanges } from '@angular/core';
import { HeroTableComponent } from './hero-table/hero-table.component';
import {PlayerTableComponent} from './player-table/player-table.component';
import {MatchesTableComponent} from './matches-table/matches-table.component';
import { UserDataService } from './services/userdata.service';
import { TeamsApiService } from './services/teams-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:number;
  title:string;
  name:string;
  constructor(private userDataService: UserDataService, private teamDataService:TeamsApiService)
  {
    
  }

  ngOnInit() {
    this.title = 'Dota Teams';
    this.userDataService.currentTeamId.subscribe(id => this.id = id);
    this.userDataService.currentTeamName.subscribe(name => this.name = name);
  }
}
