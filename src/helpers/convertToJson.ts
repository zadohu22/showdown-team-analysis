interface Pokemon {
	Name: string;
	Item: string;
	Ability: string;
	Level: string;
	Shiny: string; 
	TeraType: string;
	EVs: boolean | string; 
	IVs: boolean | string; 
	Moves: string[];
	Nature: string;
}

export const convertToJson = (input: string): Pokemon => {
	// Split the input into lines and trim each line.
	const lines = input.trim().split(/\n/);

	// Create an empty Pokemon object to store the extracted data.
	const pokemon: Pokemon = {
		Name: '',
		Item: '',
		Ability: '',
		Level: '',
		Shiny: 'No', 
		TeraType: '',
		EVs: false, 
		IVs: false, 
		Moves: [],
		Nature: '',
	};

	// Extract name and item from the first line
	const [name, item = ''] = lines[0].split('@').map((part) => part.trim());

	// Assign name and item to the Pokemon object
	pokemon.Name = name;
	pokemon.Item = item;

	// Remove the line that contains both Name and Item
	lines.shift();

	// If item is not empty, add it back to the lines
	if (item !== '') {
		lines.unshift(item);
	}
	// Add name back to the lines
	lines.unshift(name);

	// Process the rest of the lines
	lines.forEach((line) => {
		const trimmedLine = line.trim();

		// Check if the line starts with '-' to identify moves
		if (trimmedLine.startsWith('-')) {
			// Remove the '-' and trim the line to get the move name
			const moveName = trimmedLine.substring(1).trim();
			pokemon.Moves.push(moveName);
		} else {
			// Extract key and value from the line and assign them to the Pokemon object.
			const [key, ...values] = trimmedLine.split(':').map((str) => str.trim());
			const trimmedValue = values.join(':');

			// Check if the key contains 'Nature' to assign the nature to the Pokemon object.
			if (key.includes('Nature')) {
				const extractNature = key.split(' ')[0];
				pokemon.Nature = extractNature;
			}
			// Assign the value to the appropriate key in the Pokemon object.
			switch (key) {
				case 'Ability':
					pokemon.Ability = trimmedValue;
					break;
				case 'Level':
					pokemon.Level = trimmedValue;
					break;
				case 'Tera Type':
					pokemon.TeraType = trimmedValue;
					break;
				case 'Shiny':
					pokemon.Shiny = trimmedValue || 'No';
					break;
				case 'EVs':
					pokemon.EVs = trimmedValue || false;
					break;
				case 'IVs':
					pokemon.IVs = trimmedValue || false;
					break;
				default:
					break;
			}
		}
	});

	return pokemon;
};
