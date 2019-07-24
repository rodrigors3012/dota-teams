import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Player } from '../model/player';
import { TeamsApiService } from '../services/teams-api.service';
import { UserDataService } from '../services/userdata.service';
import { MatTableDataSource, MatPaginator, throwMatDialogContentAlreadyAttachedError } from '@angular/material';

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

}
