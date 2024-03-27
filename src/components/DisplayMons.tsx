import { convertToJson } from '../helpers/convertToJson';
import React from 'react';

interface DisplayMonsProps {
	pokemon: string;
}

export const DisplayMons: React.FC<DisplayMonsProps> = ({ pokemon }) => {
	const text = `\
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

	const text2 = `Gyarados @ Clear Amulet  
	Ability: Intimidate  
	Level: 50  
	Tera Type: Steel  
	EVs: 4 HP / 252 Atk / 252 Spe  
	Adamant Nature  
	- Waterfall  
	- Protect  
	- Iron Head  
	- Roar  `;

	const cleanedPokemon = convertToJson(pokemon);
	console.log(cleanedPokemon);
	return (
		<div className='w-full h-full text-black flex justify-center items-center'>
			<div className='flex flex-col'>
				{[
					`Pokemon is ${cleanedPokemon.Name}, with the ${cleanedPokemon.Ability} ability.`,
					`Level: ${cleanedPokemon.Level}.`,
					`Shiny?: ${cleanedPokemon.Shiny}.`,
					`Tera Type: ${cleanedPokemon.TeraType}.`,
					`EVs: ${cleanedPokemon.EVs}.`,
					`Nature: ${cleanedPokemon.Nature}.`,
					`IVs: ${cleanedPokemon.IVs}.`,
					`Moves: ${cleanedPokemon.Moves}.`,
					`Item: ${cleanedPokemon.Item}.`,
				].map((line, index) => (
					<p key={index}>{line}</p>
				))}
			</div>
		</div>
	);
};
