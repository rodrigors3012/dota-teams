/**
 * Represents a hero from the OpenDota Teams API. Requested with a team ID
 */
export class Hero {
    /**
     * Id of this hero
     */
    id: number;
    /**
     * Localized name of this hero
     */
    name: string;
    /**
     * Number of games the team has played with this hero
     */
    gamesPlayed: number;
    /**
     * Number of games the team has won with this hero
     */
    wins: number;

    public compareByName(other: Hero)
    {
        return this.name.localeCompare(other.name);
    }
}