import { Component, Input, OnChanges } from '@angular/core';
import { HeroTableComponent } from './hero-table/hero-table.component';
import {PlayerTableComponent} from './player-table/player-table.component';
import {MatchesTableComponent} from './matches-table/matches-table.component';
import { UserDataService } from './services/userdata.service';
import { TeamsApiService } from './services/teams-api.service';
import { noComponentFactoryError } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:number;
  title:string;
  name:string;
  logo:string;
  constructor(private userDataService: UserDataService, private teamDataService:TeamsApiService)
  {
    
  }

  ngOnInit() {
    this.title = 'Dota Teams';
    this.userDataService.currentTeamId.subscribe(id => this.id = id);
    this.userDataService.currentTeamName.subscribe(name => this.name = name);
    this.userDataService.currentTeamLogo.subscribe(logo => this.logo = logo);
  }
}
