import { convertToJson } from "../helpers/convertToJson";
import { DisplayMons } from "./DisplayMons";
import { convertFullTeam } from "../helpers/convertFullTeam";
// can't figure out how to import a txt properly atm. hard coding individual pokemon for now
import fullTeam from "../text/sample-from-showdown.txt";
import weaknessChart from "../helpers/weaknessChart";
import { useState } from "react";

interface PokemonTypeInfo {
  type: {
    name: string;
  };
}

const Home = () => {
  const [firstTypeMultiplier, setFirstTypeMultiplier] = useState([]);
  const [secondTypeMultiplier, setSecondTypeMultiplier] = useState([]);

  const vileplume = `\
	Vileplume @ Life Orb  
	Ability: Effect Spore  
	Level: 50  
	Shiny: Yes  
	Tera Type: Ground  
	EVs: 140 HP / 116 Def / 252 SpA  
	Modest Nature  
	IVs: 0 Atk  
	- Giga Drain  
	- Moonblast  
	- Sludge Bomb  
	- Tera Blast`;

  const gyarados = `Gyarados @ Clear Amulet  
	Ability: Intimidate  
	Level: 50  
	Tera Type: Steel  
	EVs: 4 HP / 252 Atk / 252 Spe  
	Adamant Nature  
	- Waterfall  
	- Protect  
	- Iron Head  
	- Roar  `;

  const porygon = `Porygon2 @ Eviolite  
	Ability: Download  
	Level: 50  
	Tera Type: Ghost  
	EVs: 252 HP / 252 SpA  
	Quiet Nature  
	IVs: 0 Atk  
	- Trick Room  
	- Recover  
	- Ice Beam  
	- Tri Attack  `;

  const tinkaton = `Tinkaton @ Assault Vest  
	Ability: Own Tempo  
	Level: 50  
	Tera Type: Fighting  
	EVs: 252 HP / 252 Atk / 4 SpD  
	Adamant Nature  
	- Fake Out  
	- Gigaton Hammer  
	- Play Rough  
	- Tera Blast  `;

  const umbreon = `Umbreon @ Leftovers  
	Ability: Inner Focus  
	Level: 50  
	Tera Type: Poison  
	EVs: 252 HP / 156 Def / 100 SpD  
	Bold Nature  
	IVs: 0 Atk  
	- Snarl  
	- Foul Play  
	- Taunt  
	- Moonlight `;

  const fullTeamText = `Vileplume @ Life Orb  
	Ability: Effect Spore  
	Level: 50  
	Shiny: Yes  
	Tera Type: Ground  
	EVs: 140 HP / 116 Def / 252 SpA  
	Modest Nature  
	IVs: 0 Atk  
	- Giga Drain  
	- Moonblast  
	- Sludge Bomb  
	- Tera Blast  
	
	Gyarados @ Clear Amulet  
	Ability: Intimidate  
	Level: 50  
	Tera Type: Steel  
	EVs: 4 HP / 252 Atk / 252 Spe  
	Adamant Nature  
	- Waterfall  
	- Protect  
	- Iron Head  
	- Roar  
	
	Umbreon @ Leftovers  
	Ability: Inner Focus  
	Level: 50  
	Tera Type: Poison  
	EVs: 252 HP / 156 Def / 100 SpD  
	Bold Nature  
	IVs: 0 Atk  
	- Snarl  
	- Foul Play  
	- Taunt  
	- Moonlight  
	
	Maushold-Four  
	Ability: Friend Guard  
	Level: 50  
	Tera Type: Normal  
	EVs: 252 HP  
	IVs: 0 Atk  
	- Follow Me  
	- Super Fang  
	- Encore  
	- Helping Hand  
	
	Porygon2 @ Eviolite  
	Ability: Download  
	Level: 50  
	Tera Type: Ghost  
	EVs: 252 HP / 252 SpA  
	Quiet Nature  
	IVs: 0 Atk  
	- Trick Room  
	- Recover  
	- Ice Beam  
	- Tri Attack  
	
	Tinkaton @ Assault Vest  
	Ability: Own Tempo  
	Level: 50  
	Tera Type: Fighting  
	EVs: 252 HP / 252 Atk / 4 SpD  
	Adamant Nature  
	- Fake Out  
	- Gigaton Hammer  
	- Play Rough  
	- Tera Blast 
	`;

  // --------------------------------------------------------------------

  const fullTeam = convertFullTeam(fullTeamText);
  const fullTeamNames = fullTeam.map((pokemon) =>
    // have to clean the input here, some pokemon will fail the fetch because of how they're named on showdown
    // will have to revisit this and add more checks eventually
    // this works for my hard coded pokemon (maushold-four should just be maushold)
    pokemon.Name.split("-")[0].toLowerCase()
  );

  console.log(fullTeamNames, "full team names");

  // Pokemon type isn't included in the user input, must make a request for each pokemon to get their typing
  const getPokemonType = async (pkmn: string) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`);
    const result = await data.json();
    const pkmnType = result.types.map(
      (typeInfo: PokemonTypeInfo) => typeInfo.type.name
    );
    return pkmnType;
  };

  // call getPokemonType on each pokemon, returns an array with each pokemons type (if two types then an array of arrays)
  const getAllTypes = async (names: string[]) => {
    try {
      const allTypes = await Promise.all(
        names.map((name: string) => getPokemonType(name))
      );
      console.log(allTypes, "all types");

      return allTypes;
    } catch (error) {
      console.error("Error fetching Pokémon types:", error);
    }
  };

  getAllTypes(fullTeamNames);

  // compare the getAllTypes array to the weakness chart, to get a full team breakdown of weaknesses that aren't covered
  // implement next

  //   const checkWeaknessForOnePokmn = (pokemon: string[]) {
  // 	for (const pokemonType in weaknessChart) {
  // 		if (
  // 		  pokemon.types[0].type.name ===
  // 		  pokemonType.charAt(0).toLowerCase() + pokemonType.slice(1)
  // 		) {
  // 		  console.log(weaknessChart[pokemonType]);
  // 		  setTypeOneMultiplier(Object.entries(weaknessChart[pokemonType]));
  // 		}
  // 		if (pokemon.types.length > 1) {
  // 		  if (
  // 			pokemon.types[1].type.name ===
  // 			pokemonType.charAt(0).toLowerCase() + pokemonType.slice(1)
  // 		  ) {
  // 			setTypeTwoMultiplier(Object.entries(weaknessChart[pokemonType]));
  // 		  }
  // 		}
  // 	  }
  // 	}, [pokemon]);
  // 	console.log("typeOneMult", typeOneMultiplier);
  // 	console.log("typeTwoMult", typeTwoMultiplier);
  //   }

  // --------------------------------------------------------------------

  return (
    <div className='w-full h-full flex flex-col text-black justify-center items-center'>
      <div>
        <DisplayMons pokemon={vileplume} />
      </div>
      -----------------------------------------
      <div>
        <DisplayMons pokemon={gyarados} />
      </div>
      -----------------------------------------
      <div>
        <DisplayMons pokemon={umbreon} />
      </div>
      -----------------------------------------
      <div>
        <DisplayMons pokemon={porygon} />
      </div>
      -----------------------------------------
      <div>
        <DisplayMons pokemon={tinkaton} />
      </div>
    </div>
  );
};

export default Home;
