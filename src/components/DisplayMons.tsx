import { convertToJson } from "../helpers/convertToJson";
import React from "react";

interface DisplayMonsProps {
  pokemon: string;
}

export const DisplayMons: React.FC<DisplayMonsProps> = ({ pokemon }) => {
  const cleanedPokemon = convertToJson(pokemon);
  console.log(">>> this is cleanedPokemon >>>", cleanedPokemon);
  return (
    <div className='w-full h-full text-black flex justify-center items-center'>
      <div className='flex flex-col'>
        {[
          `Pokemon is ${cleanedPokemon.Name}, with the ${cleanedPokemon.Ability} ability.,
          Level: ${cleanedPokemon.Level}.,
          Shiny?: ${cleanedPokemon.Shiny}.,
          Tera Type: ${cleanedPokemon.TeraType}.,
          EVs: ${cleanedPokemon.EVs}.,
          Nature: ${cleanedPokemon.Nature}.,
          IVs: ${cleanedPokemon.IVs}.,
          Moves: ${cleanedPokemon.Moves}.,
          Item: ${cleanedPokemon.Item}.`,
        ].map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};
