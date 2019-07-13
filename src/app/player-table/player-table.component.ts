import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Player } from '../model/player';
import { TeamsApiService } from '../services/teams-api.service';
import { UserDataService } from '../services/userdata.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnChanges {

  players:Player[];
  @Input() id:number;
  constructor(private teamsApi:TeamsApiService, private userData:UserDataService) { 
    this.players = new Array<Player>();
  }

  ngOnChanges() {
    this.teamsApi.getTeamPlayers(this.id).subscribe((players) => this.players = players);
  }

}
