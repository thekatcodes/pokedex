import React from "react";

export default function PokemonCard(props) {
	const { pokemonData } = props;

	console.log("POKEMONCARD", pokemonData);

    if (pokemonData.length > 0) {
        return (
          <div className="grid grid-cols-4 gap-4">
            {pokemonData.map((pokemon) => (
              <div
                className="relative max-w-sm rounded overflow-visible shadow-lg h-20"
                key={pokemon.id}
              >
                <div className="absolute top-0 left-0 w-1/2 h-full overflow-visible">
                  <img
                    className="absolute top-0 left-0 z-10 h-28"
                    src={pokemon.sprites.other.home.front_default}
                  />
                </div>
                <h3 className="z-0">#{pokemon.id}</h3>
                <h3 className="z-0">{pokemon.name}</h3>
              </div>
            ))}
          </div>
        );
      }
    }