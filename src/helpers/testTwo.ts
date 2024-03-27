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
	// Regular expression to match different parts of the input
	const regex =
		/([^@]+) @ ([^\n]+)\nAbility: ([^\n]+)\nLevel: ([^\n]+)\nTera Type: ([^\n]+)\nEVs: ([^\n]+)\n(IVs: ([^\n]+)\n)?- Moves\n((?:- [^\n]+\n)*)Nature: ([^\n]+)/;

	// Extract information using regular expression
	const match = input.match(regex);
	if (!match) {
		throw new Error('Invalid input format');
	}

	// Extract moves
	const moves = match[9]
		.trim()
		.split('\n')
		.map((move) => move.substring(2).trim());

	// Create Pokemon object with extracted information
	const pokemon: Pokemon = {
		Name: match[1].trim(),
		Item: match[2].trim(),
		Ability: match[3].trim(),
		Level: match[4].trim(),
		TeraType: match[5].trim(),
		EVs: match[6].trim(),
		IVs: match[8]?.trim() || false,
		Moves: moves,
		Nature: match[10].trim(),
		Shiny: false, // Assuming Shiny is not included in the input string
	};

	return pokemon;
};
