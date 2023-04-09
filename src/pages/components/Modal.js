import React from "react";
import { pokemonType, colorClass } from "../../utils/helper";

export default function Modal(props) {
	const { pokemon, showModal, onClose } = props;
	console.log(pokemon);

	if (!showModal) {
		return null;
	}

	const type = pokemon[0].types[0].type.name;
	pokemonType(type);
	console.log(pokemon[0].types[0].type.name);

	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className="w-[600px] flex flex-col">
				<button
					className="text-white text-xl place-self-end"
					onClick={() => onClose()}
				>
					Close
				</button>
				<div className="bg-white p-2 rounded">
					<div className={colorClass}>
						<h3>{pokemon[0].name}</h3>
						<p>
							#
							{pokemon[0].id < 10
								? `00${pokemon[0].id}`
								: pokemon[0].id <= 99
								? `0${pokemon[0].id}`
								: pokemon[0].id}
						</p>
					</div>
					<img
						src={pokemon[0].sprites.other['official-artwork'].front_default}
						alt={pokemon[0].name}
					/>
					<div>
                        {pokemon[0].types.map((type) => {
                            console.log(type.type.name)
                            const singleType = type.type.name;
                            pokemonType(singleType);
                            return (
                                <p key={type.slot} className={colorClass}>{type.type.name}</p>
                            )
                        })}
					</div>
					<div>
						<h4>About</h4>
						<div>
							<span>
								<p>{pokemon[0].weight / 10} kg</p>
								<p>Weight</p>
							</span>
							<span>
								<p>{pokemon[0].height / 10} m</p>
								<p>Height</p>
							</span>
							<span>
								<p>
									{pokemon[0].abilities.map((ability) => (
										<p key={ability.slot}>{ability.ability.name}</p>
									))}
								</p>
								<p>Abilities</p>
							</span>
						</div>
						<h4>Base Stats</h4>
						<div>
							<p>HP {pokemon[0].stats[0].base_stat}</p>
							<p>ATK {pokemon[0].stats[1].base_stat}</p>
							<p>DEF {pokemon[0].stats[2].base_stat}</p>
							<p>SATK {pokemon[0].stats[3].base_stat}</p>
							<p>SDEF {pokemon[0].stats[4].base_stat}</p>
							<p>SPD {pokemon[0].stats[5].base_stat}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
