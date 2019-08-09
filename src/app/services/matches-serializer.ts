import { Match } from '../model/match';
/**
 * Converts the OpenDota Match JSON to an instance of Match.
 */
export class MatchesSerializer {

    /**
     * Converts between the OpenDota API JSON representation of a match and my representation of a match 
     * in this app. 
     * @param data the input data from the OpenDota API that should be a list of matches for a team.
     */
    public fromJson(data: any): Match[] {
        var matches: Match[] = [];
        data.forEach(jsonMatch => {
            var match = new Match();
            try {
                match.matchId = jsonMatch.match_id;
                match.startTime = new Date(jsonMatch.start_time * 1000);
                match.radiantWin = jsonMatch.radiant_win;
                match.radiant = jsonMatch.radiant;
                match.duration = jsonMatch.duration;
                match.leagueId = jsonMatch.leagueId;
                match.leagueName = jsonMatch.league_name;
                match.cluster = jsonMatch.cluster;
                match.opposingTeamId = jsonMatch.opposing_team_id;
                match.opposingTeamLogo = jsonMatch.opposing_team_logo;
                match.opposingTeamName = jsonMatch.opposing_team_name;
                matches.push(match);
            } catch (err) {
                console.log("Failed to add response object to list of matches: " + jsonMatch);
            }
        });

        return matches;
    }
}