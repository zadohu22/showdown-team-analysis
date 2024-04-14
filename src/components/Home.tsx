import { convertToJson } from '../helpers/convertToJson';
import { DisplayMons } from './DisplayMons';
import { convertFullTeam } from '../helpers/convertFullTeam';
import fullTeam from '../text/sample-from-showdown.txt';

const Home = () => {
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

	convertFullTeam(fullTeamText);

	// const jsonData = convertToJson(text2);
	// console.log(jsonData);
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
