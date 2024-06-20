// interface IPokemon {
//   Name: string;
//   Item: string;
//   Ability: string;
//   Level: string;
//   Shiny: string;
//   TeraType: string;
//   EVs: boolean | string;
//   IVs: boolean | string;
//   Moves: string[];
//   Nature: string;
// }

class Pokemon {
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
  constructor(payload: Pokemon) {
    this.Name = payload.Name;
    this.Item = payload.Item;
    this.Ability = payload.Ability;
    this.Level = payload.Level;
    this.Shiny = payload.Shiny;
    this.TeraType = payload.TeraType;
    this.EVs = payload.EVs;
    this.IVs = payload.IVs;
    this.Moves = payload.Moves;
    this.Nature = payload.Nature;
    Object.assign(this, payload);
  }
  static create(input: string): Pokemon {
    const lines = input.trim().split(/\n/);

    // Create an empty Pokemon object to store the extracted data.
    const pokemonData: Pokemon = {
      Name: "",
      Item: "",
      Ability: "",
      Level: "",
      Shiny: "No",
      TeraType: "",
      EVs: false,
      IVs: false,
      Moves: [],
      Nature: "",
    };

    // Extract name and item from the first line
    const [name, item = ""] = lines[0].split("@").map((part) => part.trim());

    // Assign name and item to the Pokemon object
    pokemonData.Name = name;
    pokemonData.Item = item;

    // Remove the line that contains both Name and Item
    lines.shift();

    // If item is not empty, add it back to the lines
    if (item !== "") {
      lines.unshift(item);
    }
    // Add name back to the lines
    lines.unshift(name);

    // Process the rest of the lines
    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Check if the line starts with '-' to identify moves
      if (trimmedLine.startsWith("-")) {
        // Remove the '-' and trim the line to get the move name
        const moveName = trimmedLine.substring(1).trim();
        pokemonData.Moves.push(moveName);
      } else {
        // Extract key and value from the line and assign them to the pokemonData object.
        const [key, ...values] = trimmedLine
          .split(":")
          .map((str) => str.trim());
        const trimmedValue = values.join(":");

        // Check if the key contains 'Nature' to assign the nature to the pokemonData object.
        if (key.includes("Nature")) {
          const extractNature = key.split(" ")[0];
          pokemonData.Nature = extractNature;
        }
        // Assign the value to the appropriate key in the pokemonData object.
        switch (key) {
          case "Ability":
            pokemonData.Ability = trimmedValue;
            break;
          case "Level":
            pokemonData.Level = trimmedValue;
            break;
          case "Tera Type":
            pokemonData.TeraType = trimmedValue;
            break;
          case "Shiny":
            pokemonData.Shiny = trimmedValue || "No";
            break;
          case "EVs":
            pokemonData.EVs = trimmedValue || false;
            break;
          case "IVs":
            pokemonData.IVs = trimmedValue || false;
            break;
          default:
            break;
        }
      }
    });
    return new Pokemon(pokemonData);
  }
}

export const convertToJson = (input: string): Pokemon => {
  return Pokemon.create(input);
};
// export const convertToJson = (input: string): Pokemon => {
//   // Split the input into lines and trim each line.
//   const lines = input.trim().split(/\n/);

//   // Create an empty Pokemon object to store the extracted data.
//   const pokemonData: IPokemon = {
//     Name: "",
//     Item: "",
//     Ability: "",
//     Level: "",
//     Shiny: "No",
//     TeraType: "",
//     EVs: false,
//     IVs: false,
//     Moves: [],
//     Nature: "",
//   };

//   // Extract name and item from the first line
//   const [name, item = ""] = lines[0].split("@").map((part) => part.trim());

//   // Assign name and item to the Pokemon object
//   pokemonData.Name = name;
//   pokemonData.Item = item;

//   // Remove the line that contains both Name and Item
//   lines.shift();

//   // If item is not empty, add it back to the lines
//   if (item !== "") {
//     lines.unshift(item);
//   }
//   // Add name back to the lines
//   lines.unshift(name);

//   // Process the rest of the lines
//   lines.forEach((line) => {
//     const trimmedLine = line.trim();

//     // Check if the line starts with '-' to identify moves
//     if (trimmedLine.startsWith("-")) {
//       // Remove the '-' and trim the line to get the move name
//       const moveName = trimmedLine.substring(1).trim();
//       pokemonData.Moves.push(moveName);
//     } else {
//       // Extract key and value from the line and assign them to the pokemonData object.
//       const [key, ...values] = trimmedLine.split(":").map((str) => str.trim());
//       const trimmedValue = values.join(":");

//       // Check if the key contains 'Nature' to assign the nature to the pokemonData object.
//       if (key.includes("Nature")) {
//         const extractNature = key.split(" ")[0];
//         pokemonData.Nature = extractNature;
//       }
//       // Assign the value to the appropriate key in the pokemonData object.
//       switch (key) {
//         case "Ability":
//           pokemonData.Ability = trimmedValue;
//           break;
//         case "Level":
//           pokemonData.Level = trimmedValue;
//           break;
//         case "Tera Type":
//           pokemonData.TeraType = trimmedValue;
//           break;
//         case "Shiny":
//           pokemonData.Shiny = trimmedValue || "No";
//           break;
//         case "EVs":
//           pokemonData.EVs = trimmedValue || false;
//           break;
//         case "IVs":
//           pokemonData.IVs = trimmedValue || false;
//           break;
//         default:
//           break;
//       }
//     }
//   });

//   return pokemonData;
// };
