import { Component, Input, OnChanges, ViewChild, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { TeamsApiService } from '../services/teams-api.service';
import { MatTableDataSource, MatPaginator, Sort } from '@angular/material';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})

export class HeroTableComponent implements OnChanges, OnInit {

  @Input() id:number;
  dataSource = new MatTableDataSource<Hero>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private teamsApi:TeamsApiService) { 
  }

  ngOnChanges() {
    this.teamsApi.getTeamHeroes(this.id).subscribe((heroes) => this.dataSource.data = heroes.sort((a:Hero, b:Hero) => a.compareByName(b)));
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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
        case 'gamesPlayed': return this.compare(a.gamesPlayed, b.gamesPlayed, isAsc);
        case 'wins': return this.compare(a.wins, b.wins, isAsc);
        case 'winPercentage': return this.compare(a.wins / a.gamesPlayed, b.wins / b.gamesPlayed, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
