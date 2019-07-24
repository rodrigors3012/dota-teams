import { Component, Input, OnChanges, ViewChild, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { TeamsApiService } from '../services/teams-api.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

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
}
