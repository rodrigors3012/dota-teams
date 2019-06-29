import { Hero } from './hero';
import { Match } from './match';
import { Player } from './player';

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

    // These next three are not part of the API response but could be used later. 
    
    /**
     * This team's players, both active and inactive
     */
    players: Array<Player>;
    /**
     * The matches this team has played
     */
    matches: Array<Match>;
    /**
     * This team's hero statistics
     */
    heroes: Array<Hero>;

    constructor() { }
}