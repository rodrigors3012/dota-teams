import { Component, Input, OnChanges, ViewChild, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { TeamsApiService } from '../services/teams-api.service';
import { MatTableDataSource, MatPaginator, Sort } from '@angular/material';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})

/**
 * Table component that displays rows of Heroes from the OpenDota API. 
 */
export class HeroTableComponent implements OnChanges, OnInit {

  @Input() id: number;
  dataSource = new MatTableDataSource<Hero>();
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
    this.teamsApi.getTeamHeroes(this.id).subscribe((heroes) => this.dataSource.data = heroes.sort((a: Hero, b: Hero) => a.compareByName(b)));
  }

  /**
   * Sorts the data in the table according to the given column. Supports name, games played, wins, and win percentage. 
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
        case 'gamesPlayed': return this.compare(a.gamesPlayed, b.gamesPlayed, isAsc);
        case 'wins': return this.compare(a.wins, b.wins, isAsc);
        case 'winPercentage': return this.compare(a.wins / a.gamesPlayed, b.wins / b.gamesPlayed, isAsc);
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
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
