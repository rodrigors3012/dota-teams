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
export class PlayerTableComponent implements OnChanges, OnInit {
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  dataSource = new MatTableDataSource<Player>();
  @Input() id: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private teamsApi: TeamsApiService, private userData: UserDataService) {
  }

  ngOnChanges() {
    this.teamsApi.getTeamPlayers(this.id).subscribe((players) => this.dataSource.data = players.sort((a: Player, b: Player) => a.compareCurrentStatus(b)));
  }

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
        case 'winPercent': return this.compare(a.wins/a.gamesPlayed,b.wins/b.gamesPlayed, isAsc);
        case 'isCurrent': return this.compare(a.isCurrentTeamMember, b.isCurrentTeamMember, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
