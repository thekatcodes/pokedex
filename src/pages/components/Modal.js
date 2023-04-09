import React from "react";
import Image from "next/image";
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
			<div className="w-[500px] flex flex-col">
				<button
					className="text-white text-xl place-self-end"
					onClick={() => onClose()}
				>
					Close
				</button>
				<div className={`${colorClass} p-2 rounded-2xl`}>
					<div className="flex justify-between">
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
						src={pokemon[0].sprites.other["official-artwork"].front_default}
						alt={pokemon[0].name}
						className=""
					/>
					<div className="bg-grey-100 p-3 m-2 rounded-2xl ">
						<div className="flex justify-center mt-20 mb-3">
							{pokemon[0].types.map((type) => {
								console.log(type.type.name);
								const singleType = type.type.name;
								pokemonType(singleType);
								return (
									<p
										key={type.slot}
										className={`inline-block p-1 pl-2 pr-2 rounded-2xl ${colorClass}`}
									>
										{type.type.name}
									</p>
								);
							})}
						</div>
						<h4 className="flex justify-center">About</h4>
						<div className="flex justify-between m-10 content-end">
							<div>
								<span className="flex flow-row mb-3">
									<Image
										src="/weight-icon.png"
										alt="Weight icon"
										width={20}
										height={20}
									/>
									<p>{pokemon[0].weight / 10} kg</p>
								</span>
								<p>Weight</p>
							</div>
							<div className="text-center">
								<span className="flex flow-row mb-3">
									<Image
										src="/ruler.png"
										alt="Ruler icon"
										width={20}
										height={20}
									/>
									<p>{pokemon[0].height / 10} m</p>
								</span>
								<p>Height</p>
							</div>
							<div>
								<span className="mb-3">
									<p className="capitalize">
										{pokemon[0].abilities.map((ability) => (
											<p key={ability.slot}>{ability.ability.name}</p>
										))}
									</p>
								</span>
								<p>Abilities</p>
							</div>
						</div>
                        <h4 className="flex justify-center">Base Stats</h4>
                        {/* Calls pokemonType function again to set the default color to the first type (if pokemon has more than 1 type) */}
                        {pokemonType(type)} 
                        <div>
							<p>HP {pokemon[0].stats[0].base_stat}</p>
                            <div class={`mt-2 ${colorClass} rounded-full bg-opacity-25`}>
								<div class={`w-[78px] mt-2 ${colorClass} py-0 rounded-full opacity-100`}>
									<div class=" text-white text-sm inline-block bg-purple-700 px-2 rounded-full">
										{pokemon[0].stats[0].base_stat}
									</div>
								</div>
							</div>
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
