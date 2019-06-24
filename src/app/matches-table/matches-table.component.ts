import { Component, OnInit } from '@angular/core';
import { Match } from '../model/match';
import { TeamsApiService } from '../services/teams-api.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches:Match[];
  constructor(private teamsApi:TeamsApiService) {
    this.matches = new Array<Match>();
   }

  ngOnInit() {
    this.teamsApi.getTeamMatches(1838315).subscribe((matches) => this.matches = matches);
  }
}
