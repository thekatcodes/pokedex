import React from "react";
import Modal from "./components/Modal";

export default function PokemonCard(props) {
	const { pokemonData } = props;

	console.log("POKEMONCARD", pokemonData);

	if (pokemonData.length > 0) {
		return (
			<>
				<div className="pokemon-cards grid grid-cols-4 gap-20">
					{pokemonData.map((pokemon) => (
						<div
							className="relative max-w-sm border-solid border-2 border-grey-100 rounded-2xl overflow-visible shadow-lg h-20 mt-6 mb-6 flex items-center justify-around"
							key={pokemon.id}
						>
							<div className="absolute -top-4 -left-6 w-1/2 h-full overflow-visible">
								<img
									className="absolute -top-4 -left-6 z-1 h-30"
									src={pokemon.sprites.other.home.front_default}
								/>
							</div>
							<div className="pokemon-cards__name flex flex-col">
								<h3 className="z-0 text-center ml-5">
									#
									{pokemon.id < 10
										? `00${pokemon.id}`
										: pokemon.id <= 99
										? `0${pokemon.id}`
										: pokemon.id}
								</h3>
								<h3 className="z-0 uppercase text-center ml-5">
									{pokemon.name}
								</h3>
							</div>
						</div>
					))}
				</div>
				<Modal />
			</>
		);
	}
}
