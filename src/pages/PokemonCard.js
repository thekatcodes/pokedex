import React from "react";

export default function PokemonCard(props) {
	const { pokemonData } = props;

	console.log("POKEMONCARD", pokemonData);

	if (pokemonData.length === 20) {
        return pokemonData.map((pokemon) => {
			return (
				<div>
					<h3>{pokemon.name}</h3>
				</div>
			);
		});	} else {
		return pokemonData.map((pokemon) => {
			return (
				<div>
					<h3>#{pokemon.id}</h3>
					<img src={pokemon.sprites.other.home.front_default} />
					<h3>{pokemon.name}</h3>
				</div>
			);
		});
	}
}
