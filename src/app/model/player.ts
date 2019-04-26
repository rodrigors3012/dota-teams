/**
 * Represents a Dota 2 player from the OpenDota API
 */

 export class Player {
     /**
      * The Steam account id of this player
      */
     accountId: number;
     /**
      * The name of this player. Gamertag, not real name
      */
     name: string;
     /**
      * The number of professional games played with this team
      */
     gamesPlayed: number;
     /**
      * Number of games won with this team
      */
     wins: number;
     /**
      * Is this player currently on the team?
      */
     isCurrentTeamMember: boolean;
 }