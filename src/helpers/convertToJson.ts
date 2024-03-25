interface Pokemon {
	Name: string;
	Item: string;
	Ability: string;
	Level: string;
	Shiny: boolean | string; // Updated Shiny type to boolean | string
	TeraType: string;
	EVs: boolean | string; // Updated EVs type to boolean | string
	IVs: boolean | string; // Updated IVs type to boolean | string
	Moves: string[];
	Nature: string;
}

export const convertToJson = (input: string): Pokemon => {
	const lines = input.trim().split(/\n/);
	const pokemon: Pokemon = {
		Name: '',
		Item: '',
		Ability: '',
		Level: '',
		Shiny: false, // Default value set to false
		TeraType: '',
		EVs: false, // Default value set to false
		IVs: false, // Default value set to false
		Moves: [],
		Nature: '',
	};

	// Process the first line separately to extract Name and Item
	const [name, item] = lines[0].split('@');
	pokemon.Name = name.trim();
	pokemon.Item = item?.trim() || '';

	// Extract Nature from the 7th line
	const natureLine = lines[6].trim();
	const natureWords = natureLine.split(' ');
	if (natureWords.length > 1 && natureWords[1].toLowerCase() === 'nature') {
		pokemon.Nature = natureWords[0];
	}

	// Process the rest of the lines
	for (let i = 1; i < lines.length; i++) {
		const line = lines[i];
		const trimmedLine = line.trim();

		// Check if the line starts with '-' to identify moves
		if (trimmedLine.startsWith('-')) {
			// Remove the '-' and trim the line to get the move name
			const moveName = trimmedLine.substring(1).trim();
			pokemon.Moves.push(moveName);
		} else {
			const [key, ...values] = line.split(':');
			const trimmedKey = key.trim();
			const trimmedValue = values.join(':').trim();

			switch (trimmedKey) {
				case 'Ability':
					pokemon.Ability = trimmedValue;
					break;
				case 'Level':
					pokemon.Level = trimmedValue;
					break;
				case 'Shiny':
					// If "Shiny" is present, set its value to true, otherwise set to false
					pokemon.Shiny =
						trimmedValue.toLowerCase() === 'yes' ? true : trimmedValue;
					break;
				case 'Tera Type':
					pokemon.TeraType = trimmedValue;
					break;
				case 'EVs':
					// If "EVs" are present, set their value, otherwise set to false
					pokemon.EVs = trimmedValue || false;
					break;
				case 'IVs':
					// If "IVs" are present, set their value, otherwise set to false
					pokemon.IVs = trimmedValue || false;
					break;
				default:
					break;
			}
		}
	}

	return pokemon;
};

const input = `\
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

const pokemonData: Pokemon = convertToJson(input);
console.log(pokemonData);
