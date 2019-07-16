import { Component, Input, OnChanges } from '@angular/core';
import { Match } from '../model/match';
import { TeamsApiService } from '../services/teams-api.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})

/**
 * This component creates a table of all of the matches played by the team with the given id. 
 */
export class MatchesTableComponent implements OnChanges {

  matches:Match[];
  @Input() id:number;
  constructor(private teamsApi:TeamsApiService) {
    this.matches = new Array<Match>();
   }

  ngOnChanges()
  {
    this.teamsApi.getTeamMatches(this.id).subscribe((matches) => this.matches = matches.sort((a: Match, b: Match) => a.compareByStartTimeDesc(b)));
  }
}
