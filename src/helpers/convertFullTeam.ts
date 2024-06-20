import { convertToJson } from "./convertToJson";

export const convertFullTeam = (fullTeam: string) => {
  const lines = fullTeam.split(/\n\s*\n/);

  const team = lines.map((pokemon) => convertToJson(pokemon));

  let lindsey = "red";

  lindsey = "blue";

  console.log(team, "this is convert full team");

  return team;
};
