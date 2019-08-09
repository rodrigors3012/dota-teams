import { Hero } from '../model/hero';

/**
 * Converts the OpenDota API hero JSON to an instance of Hero. 
 */
export class HeroesSerializer {

    /**
     * 
     * @param from the input response data that should be a list of OpenDota API heroes.
     */
    fromJson(from: any): Hero[] {
        var heroArray: Hero[] = [];
        from.forEach(jsonHero => {
            try {
                var hero = new Hero();
                hero.name = jsonHero.localized_name;
                hero.id = jsonHero.hero_id;
                hero.gamesPlayed = jsonHero.games_played;
                hero.wins = jsonHero.wins;
                heroArray.push(hero);
            } catch (err) {
                console.log("Failed to add response object to list of heroes: " + jsonHero);
            }
        });

        return heroArray;
    }
}