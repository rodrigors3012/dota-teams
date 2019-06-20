import { Component } from '@angular/core';
import { TeamsApiService } from 'src/app/services/teams-api.service';
import { OnInit } from '@angular/core';
import { Team } from './model/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dota Teams Search';

  constructor(private teamsApi:TeamsApiService)
  {
    
  }

  ngOnInit() {
    console.log("on init works");
    this.teamsApi.getTeamById(1838315).subscribe((res) => console.log(res.name));
    
    // Imitates a name search
    var matchingTeams:Team[] = [];
    this.teamsApi.getTeams().subscribe((res) => 
    {
      res.filter((team) => team.name === "Team Secret").forEach((team) => matchingTeams.push(team));
      console.info(matchingTeams[0].name);
    });

    this.teamsApi.getTeamHeroes(1838315).subscribe((res) => console.log(res));
  }
}
