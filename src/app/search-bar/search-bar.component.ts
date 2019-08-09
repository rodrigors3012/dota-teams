import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/userdata.service';
import { TeamsApiService } from '../services/teams-api.service';
import { Team } from '../model/team';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
/**
 * Form component consisting of a search bar and enter button to search the OpenDota API for team names. 
 */
export class SearchBarComponent implements OnInit {

  teamList:Team[];
  constructor(private userDataService:UserDataService, private teamsApiService: TeamsApiService) {  
    this.teamList = new Array<Team>();
   }

  ngOnInit() {
    this.teamsApiService.getTeams().subscribe(list => this.teamList = list);
  }

  /**
   * Method called when user presses enter or clicks the enter button on the search bar. 
   * @param form The form data object. 
   */
  submitId(form)
  {
    var submitName = form.value.nameField as string;
    var teamId:number = -1;
    // First check to see if any names match; if no matching name is found, check if any tags match. 
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
