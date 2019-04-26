/**
     * Represents a professional Dota 2 team from the OpenDota API. 
     */
export class Team {
    /**
     * This team's id
     */
    teamId: number;
    /**
     * This team's rating. Maybe this is used to calculate DPC standing?
     */
    rating: number;
    /**
     * This team's number of wins
     */
    wins: number;
    /**
     * This team's number of losses
     */
    losses: number;
    /**
     * The last match that this team played
     */
    lastMatchTime: number;
    /**
     * The name of this team
     */
    name: string;
    /**
     * Shortened name of this team
     */
    tag: string;
    /**
     * Web URL to team logo
     */
    logoUrl: string;

    constructor() {}
}