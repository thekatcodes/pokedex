import React, { useState } from "react";
import Modal from "./components/Modal";

export default function PokemonCard(props) {
	const { pokemonData } = props;
	const [showModal, setShowModal] = useState(false);
	const [currentPokemon, setCurrentPokemon] = useState("");

    console.log("POKEMONCARD", pokemonData);

    // Use filter method to create new array (focusPokemon) that contains only the pokemon with the name in currentPokemon state
    const focusPokemon = pokemonData.filter(pokemon => pokemon.name === currentPokemon);

    
	if (pokemonData.length > 0) {
		return (
			<>
				<div className="pokemon-cards grid grid-cols-4 gap-20">
					{pokemonData.map((pokemon) => (
						<div
							className="relative max-w-sm border-solid border-2 border-grey-100 rounded-2xl overflow-visible shadow-lg h-28 mt-6 mb-6 flex items-center justify-around"
							key={pokemon.id}
						>
							<div className="absolute -top-0 -left-6 w-1/2 h-full overflow-visible">
								<img
									className="absolute -top-2 -left-6 z-1 w-[130px]"
									src={pokemon.sprites.other['official-artwork'].front_default}
								/>
							</div>
							<div className="pokemon-cards__name flex flex-col ml-5 pt-5 pb-5 z-0 text-center">
								<p>
									#
									{pokemon.id < 10
										? `00${pokemon.id}`
										: pokemon.id <= 99
										? `0${pokemon.id}`
										: pokemon.id}
								</p>
								<h3 className="uppercase">
									{pokemon.name}
								</h3>
							<button className="text-center"
								onClick={() => {
									setShowModal(true);
                                    setCurrentPokemon(pokemon.name);
								}}
							>
								Show details
							</button>
							</div>
						</div>
					))}
				</div>
				<Modal
					showModal={showModal}
                    onClose={() => setShowModal(false)}
                    pokemon={focusPokemon}

				/>
			</>
		);
	}
}
