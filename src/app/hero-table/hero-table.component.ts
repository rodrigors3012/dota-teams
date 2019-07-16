import { Component, Input, OnChanges } from '@angular/core';
import { Hero } from '../model/hero';
import { TeamsApiService } from '../services/teams-api.service';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})

export class HeroTableComponent implements OnChanges {

  heroes:Array<Hero>;
  @Input() id:number;
  constructor(private teamsApi:TeamsApiService) { 
    this.heroes = new Array<Hero>();
  }

  ngOnChanges() {
    this.teamsApi.getTeamHeroes(this.id).subscribe((heroes) => this.heroes = heroes.sort((a:Hero, b:Hero) => a.compareByName(b)));
  }
}
