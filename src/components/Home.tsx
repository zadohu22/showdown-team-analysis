import { convertToJson } from '../helpers/convertToJson';

const Home = () => {
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

	const jsonData = convertToJson(text2);
	console.log(jsonData);
	return (
		<div className='w-full h-full text-black flex justify-center items-center'>
			<div className='flex flex-col'>
				{[
					`Pokemon is ${jsonData.Name}, with the ${jsonData.Ability} ability.`,
					`Level: ${jsonData.Level}.`,
					`Shiny?: ${jsonData.Shiny}.`,
					`Tera Type: ${jsonData.TeraType}.`,
					`EVs: ${jsonData.EVs}.`,
					`Nature: ${jsonData.Nature}.`,
					`IVs: ${jsonData.IVs}.`,
					`Moves: ${jsonData.Moves}.`,
					`Item: ${jsonData.Item}.`,
				].map((line, index) => (
					<p key={index}>{line}</p>
				))}
			</div>
		</div>
	);
};

export default Home;
