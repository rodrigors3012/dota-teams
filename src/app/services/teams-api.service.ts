import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../model/team';
import { Hero } from '../model/hero';
import { HeroesSerializer } from './heroes-serializer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsApiService {
  url = "https://api.opendota.com/api/teams/";
  private heroesSerializer = new HeroesSerializer();

  constructor(private httpClient:HttpClient) { }

  public getTeams() 
  {
    return this.httpClient.get<Team[]>(`${this.url}`);
  }

  public getTeamById(id:number)
  {
    return this.httpClient.get<Team>(`${this.url}${id}`);
  }

  public getTeamHeroes(id:number)
  {
    return this.httpClient.get<Hero[]>(`${this.url}${id}/heroes`)
    .pipe(map(data => this.heroesSerializer.fromJson(data)));
  }
}
