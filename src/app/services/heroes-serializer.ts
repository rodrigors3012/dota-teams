import { Hero } from '../model/hero';

export class HeroesSerializer {
    fromJson(from:any) : Hero[] 
    {
        var heroArray:Hero[] = [];
        from.forEach(jsonHero => {
            var hero = new Hero();
            hero.name = jsonHero.localized_name;
            hero.id = jsonHero.hero_id;
            hero.gamesPlayed = jsonHero.games_played;
            hero.wins = jsonHero.wins;
            heroArray.push(hero);
        });
        
        return heroArray;
    }
}