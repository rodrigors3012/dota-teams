/**
     * Represents a single game of Dota 2. This is requested with one team ID and
     * the response returns the other id. From OpenDota API. 
     */
export class Match {
    /** 
     * The match ID in the Dota 2 Game Coordinator. Can be used to find replays
     * */
    matchId: number;
    /**
     * Did radiant win this game?
     */
    radiantWin: boolean;
    /**
     * Was the team you requested this match thru playing as radiant?
     */
    radiant: boolean;
    /**
     * Duration of the match in seconds
     */
    duration: number;
    /**
     * The start date of the match
     */
    startTime: Date;
    /**
     * The ID of the league in which this match was played
     */
    leagueId: number;
    /**
     * The name of the league in which this match was played
     */
    leagueName: string;
    /**
     * The series in which this match was played (I think)
     */
    cluster: number;
    /**
     * The opposing team's id
     */
    opposingTeamId: number;
    /**
     * The opposing team's name
     */
    opposingTeamName: string;
    /**
     * Path to the opposing team's logo
     */
    opposingTeamLogo: string;

    public didTeamWin(): boolean {
        return this.radiant ? this.radiantWin : !this.radiantWin;
    }

    public printDuration(): string {
        var hours = Math.floor(this.duration / 3600);
        var minutes = Math.floor((this.duration % 3600) / 60);
        var seconds = Math.floor((this.duration % 3600) - (minutes * 60));
        var formatString = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

        if (hours > 0) {
            formatString = hours + ":" + formatString;
        }
        return formatString;
    }
}