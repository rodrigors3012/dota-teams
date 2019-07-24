import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Match } from '../model/match';
import { TeamsApiService } from '../services/teams-api.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})

/**
 * This component creates a table of all of the matches played by the team with the given id. 
 */
export class MatchesTableComponent implements OnChanges, OnInit {

  @Input() id:number;
  dataSource = new MatTableDataSource<Match>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private teamsApi:TeamsApiService) {
   }

   ngOnInit() {
     this.dataSource.paginator = this.paginator;
   }

  ngOnChanges()
  {
    this.teamsApi.getTeamMatches(this.id).subscribe((matches) => this.dataSource.data = matches.sort((a: Match, b: Match) => a.compareByStartTimeDesc(b)));
  }
}
