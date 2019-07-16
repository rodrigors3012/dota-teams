import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { TeamsApiService } from './teams-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private teamIdSource = new Subject<number>();
  private teamNameSource = new Subject<string>();
  private teamLogoSource = new Subject<string>();
  currentTeamId = this.teamIdSource.asObservable();
  currentTeamName = this.teamNameSource.asObservable();
  currentTeamLogo = this.teamLogoSource.asObservable();
  constructor(private teamsApi:TeamsApiService) {

  }

   changeTeamId(id:number)
   {
     if (id < 1)
     {
       console.error("Cannot set negative team id. Id passed: " + id);
     } else {
       this.teamIdSource.next(id);
       this.teamsApi.getTeamById(id).subscribe(team => this.teamNameSource.next(team.name));
       var url = `https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/${id}.png`;
       if (this.imageExists(url))
       {
         url = "";
       }
       this.teamLogoSource.next(url);
     }
   }

   // TODO: Fails because invalid CORS request. May want to handle this somewhere else. 
   imageExists(url:string)
   {
     var http = new XMLHttpRequest();
     http.open('HEAD', url, false);
     http.send();

     return http.status != 404;
   }

   
}
