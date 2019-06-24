import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { TeamsApiService } from '../services/teams-api.service';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})

export class HeroTableComponent implements OnInit {

  heroes:Array<Hero>;
  sortComparison:(arg0: Hero, arg1: Hero) => number = this.ascendingAlphabeticalSort;
  constructor(private teamsApi:TeamsApiService) { 
    this.heroes = new Array<Hero>();
  }

  ngOnInit() {
    this.teamsApi.getTeamHeroes(1838315).subscribe((heroes) => this.heroes = heroes.sort(this.sortComparison));
  }

  private ascendingAlphabeticalSort(hero1:Hero, hero2:Hero) : number
  {
    return hero1.name.localeCompare(hero2.name);
  }

  private descendingGamesPlayedSort(hero1:Hero, hero2:Hero) : number
  {
    // Typically user will want most games played, so we reverse
    // the default sort here
    return hero2.gamesPlayed - hero1.gamesPlayed;
  }

  private descendingWinsSort(hero1:Hero, hero2:Hero) : number
  {
    return hero2.wins - hero1.wins;
  }

  private descendingWinPercentageSort(hero1: Hero, hero2:Hero) : number
  {
    return hero2.wins/hero2.gamesPlayed - hero1.wins/hero1.gamesPlayed;
  }
}
