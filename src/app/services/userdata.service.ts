import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TeamsApiService } from './teams-api.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Stores and broadcasts changes in user data needed across components. 
 */
export class UserDataService {

  private teamIdSource = new Subject<number>();
  private teamNameSource = new Subject<string>();
  private teamLogoSource = new Subject<string>();
  currentTeamId = this.teamIdSource.asObservable();
  currentTeamName = this.teamNameSource.asObservable();
  currentTeamLogo = this.teamLogoSource.asObservable();
  constructor(private teamsApi: TeamsApiService) {

  }

  /**
   * Changes the current team id to the given number. 
   * @param id the Team id. Find on OpenDota website in the URL for each team page.
   */
  changeTeamId(id: number) {
    this.teamIdSource.next(id);
    this.teamsApi.getTeamById(id).subscribe(team => this.teamNameSource.next((team === null ? "Invalid Team Id" : team.name)));
    var url = `https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/${id}.png`;
    this.teamLogoSource.next(url);
  }
}
