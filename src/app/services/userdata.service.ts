import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { TeamsApiService } from './teams-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private teamIdSource = new Subject<number>();
  private teamNameSource = new Subject<string>();
  currentTeamId = this.teamIdSource.asObservable();
  currentTeamName = this.teamNameSource.asObservable();
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
     }
   }


}
