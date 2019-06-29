import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../model/player';
import { TeamsApiService } from '../services/teams-api.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {

  players:Player[];
  @Input() id:number;
  constructor(private teamsApi:TeamsApiService) { 
    this.players = new Array<Player>();
  }

  ngOnInit() {
    this.teamsApi.getTeamPlayers(this.id).subscribe((players) => this.players = players);
  }

}
