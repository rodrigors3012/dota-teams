import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Match } from '../model/match';
import { TeamsApiService } from '../services/teams-api.service';
import { MatTableDataSource, MatPaginator, Sort } from '@angular/material';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})

/**
 * Table component of all of the matches played by the team with the given id. 
 */
export class MatchesTableComponent implements OnChanges, OnInit {

  @Input() id: number;
  dataSource = new MatTableDataSource<Match>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private teamsApi: TeamsApiService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  /**
   * What to do when something that this component relies on changes. In this case, it updates the data in the table.
   */
  ngOnChanges() {
    this.teamsApi.getTeamMatches(this.id).subscribe((matches) => this.dataSource.data = matches.sort((a: Match, b: Match) => a.compareByStartTimeDesc(b)));
  }

  /**
   * Sorts the data in the table according to the given column. Supports match ID, win status, Radiant or Dire side, match duration, match start time, league name, or opposing team name. 
   * @param sort the column to sort by, along with the direction.
   */
  sortData(sort: Sort) {
    const data = this.dataSource.data;
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }


    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'matchId': return this.compare(a.matchId, b.matchId, isAsc);
        case 'didWin': return this.compare(a.didTeamWin(), b.didTeamWin(), isAsc);
        case 'side': return this.compare(a.radiant, b.radiant, isAsc);
        case 'duration': return this.compare(a.duration, b.duration, isAsc);
        case 'startTime': return this.compare(a.startTime.getTime(), b.startTime.getTime(), isAsc);
        case 'league': return this.compare(a.leagueName, b.leagueName, isAsc);
        case 'opponent': return this.compare(a.opposingTeamName, b.opposingTeamName, isAsc);
        default: return 0;
      }
    });
  }

  /**
   * A tripartite comparision operator for strings and numbers. 
   * @param a the first primitive to compare.
   * @param b the second primitive to compare. 
   * @param isAsc whether or not the comparision is supposed to be in ascending order, e.g. returning 1 if a < b is ascending.
   */
  compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
