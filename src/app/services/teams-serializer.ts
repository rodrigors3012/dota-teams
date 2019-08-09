import { Team } from '../model/team';

/**
 * Converts the OpenDota Teams JSON to an array of instances of Team. 
 */
export class TeamsSerializer {
    public fromJson(data: any): Team[] {
        var teams: Team[] = [];
        data.forEach(jsonTeam => {
            var team: Team = new Team();
            try {
                team.teamId = jsonTeam["team_id"];
                team.rating = jsonTeam["rating"];
                team.name = jsonTeam["name"];
                team.wins = jsonTeam["wins"];
                team.losses = jsonTeam["losses"];
                team.lastMatchTime = jsonTeam["last_match_time"];
                team.tag = jsonTeam["tag"];
                team.logoUrl = jsonTeam["logo_url"];
                teams.push(team);
            } catch (err) {
                console.log("Failed to add response object to list of teams: " + jsonTeam);
            }
        });

        return teams;
    }
}