import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';
import { TeamsApiService } from '../services/teams-api.service';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})

export class HeroTableComponent implements OnInit {

  heroes:Array<Hero>;
  @Input() id:number;
  constructor(private teamsApi:TeamsApiService) { 
    this.heroes = new Array<Hero>();
  }

  ngOnInit() {
    this.teamsApi.getTeamHeroes(this.id).subscribe((heroes) => this.heroes = heroes);
  }
}
