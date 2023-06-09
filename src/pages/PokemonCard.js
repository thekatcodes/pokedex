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
				<div className="pokemon-cards grid grid-cols-1 mx-[50px] sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-[3em]">
                    {pokemonData
                        .filter((pokemon) => pokemon.id < 1000)
                        .sort((a, b) => a.id - b.id)
                        .map((pokemon) => (
						<div
							className="transition duration-300 ease-in-out hover:scale-110 pokemon-cards__card relative width[100px] md:max-w-sm border-solid border-2 border-grey-100 rounded-2xl overflow-visible shadow-lg h-28 md:my-6 flex items-center justify-around"
							key={pokemon.id}
						>
							<div className="absolute top-3 -left-8 sm:-left-6 w-1/2 h-full overflow-visible">
								<img
									className="absolute sm:-top-[1.5em] left-0 z-1 w-[100px] sm:w-[130px] "
									src={pokemon.sprites.other['official-artwork'].front_default}
								/>
							</div>
							<div className="pokemon-cards__name flex flex-col sm:ml-[3.25em] pt-5 pb-5 z-0 text-center">
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
							<button className="text-center text-grey-200 text-s"
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
