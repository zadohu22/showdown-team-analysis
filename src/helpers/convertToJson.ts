interface Pokemon {
	Name: string;
	Item: string;
	Ability: string;
	Level: string;
	Shiny: string; // Updated Shiny type to boolean | string
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
		Shiny: 'No', // Default value set to false
		TeraType: '',
		EVs: false, // Default value set to false
		IVs: false, // Default value set to false
		Moves: [],
		Nature: '',
	};

	// Process the first line separately to extract Name and Item
	// const [name, item] = lines[0].split('@');
	// pokemon.Name = name.trim();
	// pokemon.Item = item?.trim() || '';
	// // add pokemon.Name and pokemon.Item to the lines, and remove the line that contains both
	// lines.unshift(pokemon.Item);
	// lines.unshift(pokemon.Name);
	// lines.splice(2, 1); // remove the line that contains both Name and Item

	// Extract name and item from the first line
	const [name, item = ''] = lines[0].split('@').map((part) => part.trim()); // Trim each part

	// Assign name and item to the Pokemon object
	pokemon.Name = name;
	pokemon.Item = item;

	// Remove the line that contains both Name and Item
	lines.shift(); // Remove the first line

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
			// const [key, ...values] = line.split(':');
			const [key, ...values] = trimmedLine.split(':').map((str) => str.trim());
			// const trimmedKey = key.trim();
			const trimmedValue = values.join(':');

			if (key.includes('Nature')) {
				const extractNature = key.split(' ')[0];
				pokemon.Nature = extractNature;
			}

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
