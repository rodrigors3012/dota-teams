import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Player } from '../model/player';
import { TeamsApiService } from '../services/teams-api.service';
import { UserDataService } from '../services/userdata.service';
import { MatTableDataSource, MatPaginator, throwMatDialogContentAlreadyAttachedError, Sort } from '@angular/material';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
/**
 * Table component with rows that display Player information from the OpenDota API. 
 */
export class PlayerTableComponent implements OnChanges, OnInit {

  dataSource = new MatTableDataSource<Player>();
  @Input() id: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private teamsApi: TeamsApiService, private userData: UserDataService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * What to do when something that this component relies on changes. In this case, it updates the data in the table.
   */
  ngOnChanges() {
    this.teamsApi.getTeamPlayers(this.id).subscribe((players) => this.dataSource.data = players.sort((a: Player, b: Player) => a.compareCurrentStatus(b)));
  }

  /**
   * Sorts the data in the table according to the given column. Supports name, account ID, games played, wins, win percentage, or current team status. 
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
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'accountId': return this.compare(a.accountId, b.accountId, isAsc);
        case 'gamesPlayed': return this.compare(a.gamesPlayed, b.gamesPlayed, isAsc);
        case 'wins': return this.compare(a.wins, b.wins, isAsc);
        case 'winPercent': return this.compare(a.wins / a.gamesPlayed, b.wins / b.gamesPlayed, isAsc);
        case 'isCurrent': return this.compare(a.isCurrentTeamMember, b.isCurrentTeamMember, isAsc);
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
