import React from "react";

export default function PokemonCard(props) {
	const { pokemonData } = props;

	console.log("POKEMONCARD", pokemonData);

	if (pokemonData.length > 0) {
		return pokemonData.map((pokemon) => {
			return (
				<div key={pokemon.id}>
					<h3>#{pokemon.id}</h3>
					<img src={pokemon.sprites.other.home.front_default} />
					<h3>{pokemon.name}</h3>
				</div>
			);
		});
	}
}
