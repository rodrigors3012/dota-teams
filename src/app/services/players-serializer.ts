import { Player } from '../model/player';

/**
 * Converts the OpenDota Player JSON to an instance of Player. 
 */
export class PlayersSerializer {
    public fromJson(data: any): Player[] {
        var players: Player[] = [];
        data.forEach(jsonPlayer => {
            var player = new Player();
            try {
                player.accountId = jsonPlayer["account_id"];
                player.gamesPlayed = jsonPlayer["games_played"];
                player.name = jsonPlayer["name"];
                player.wins = jsonPlayer["wins"];
                player.isCurrentTeamMember = jsonPlayer["is_current_team_member"];
                players.push(player);
            } catch (err) {
                console.log("Failed to add response object to list of players: " + jsonPlayer);
            }
        });

        return players;
    }
}