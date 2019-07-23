import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/userdata.service';
import { TeamsApiService } from '../services/teams-api.service';
import { Team } from '../model/team';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  teamList:Team[];
  constructor(private userDataService:UserDataService, private teamsApiService: TeamsApiService) {  
    this.teamList = new Array<Team>();
   }

  ngOnInit() {
    this.teamsApiService.getTeams().subscribe(list => this.teamList = list);
  }

  submitId(form)
  {
    var submitName = form.value.nameField as string;
    var teamId:number = -1;
    // First check to see if the name matches, then if the tag matches
    if (this.teamList.some(team => team.name === submitName))
    {
      var team = this.teamList.find(team => team.name === submitName);
      teamId = this.teamList.find(team => team.name === submitName).teamId;
    } else if (this.teamList.some(team => team.tag === submitName))
    {
      teamId = this.teamList.find(team => team.tag === submitName).teamId;
    }

    this.userDataService.changeTeamId(teamId);
  }
}
