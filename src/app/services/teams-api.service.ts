import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../model/team';
import { Hero } from '../model/hero';
import { HeroesSerializer } from './heroes-serializer';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatchesSerializer } from './matches-serializer';
import { Match } from '../model/match';
import { Player } from '../model/player';
import { PlayersSerializer } from './players-serializer';
import { TeamsSerializer } from './teams-serializer';

@Injectable({
  providedIn: 'root'
})

/**
 * This class is the service by which we access the OpenDota API data for teams.
 */
export class TeamsApiService {
  url = "https://api.opendota.com/api/teams/";
  private heroesSerializer = new HeroesSerializer();
  private matchesSerializer = new MatchesSerializer();
  private playersSerializer = new PlayersSerializer();
  private teamsSerializer = new TeamsSerializer();

  constructor(private httpClient: HttpClient) { }

  /**
   * Retrieves the list of Teams. 
   */
  public getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.url}`).pipe(map(data => this.teamsSerializer.fromJson(data)));
  }

  /**
   * Retrieves the Team with the given id. 
   * @param id the Team id. Find on OpenDota website in the URL for each team page. 
   */
  public getTeamById(id: number): Observable<Team> {
    return this.httpClient.get<Team>(`${this.url}${id}`);
  }

  /**
   * Retrieves the Heroes for the team with the given id. 
   * @param id the Team id. Find on OpenDota website in the URL for each team page. 
   */
  public getTeamHeroes(id: number): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.url}${id}/heroes`)
      .pipe(map(data => this.heroesSerializer.fromJson(data)));
  }

  /**
   * Retrieves the Matches for the Team with the given id. 
   * @param id the Team id. Find on OpenDota website in the URL for each team page. 
   */
  public getTeamMatches(id: number): Observable<Match[]> {
    return this.httpClient.get<Match[]>(`${this.url}${id}/matches`)
      .pipe(map(data => this.matchesSerializer.fromJson(data)));
  }

  /**
   * Retrieves the Players for the Team with the given id. 
   * @param id the Team id. Find on OpenDota website in the URL for each team page. 
   */
  public getTeamPlayers(id: number): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${this.url}${id}/players`)
      .pipe(map(data => this.playersSerializer.fromJson(data)));
  }
}
