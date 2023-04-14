import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { pokemonType, colorClass, statName, newStatLabel } from "../../utils/helper";

export default function Modal(props) {
	const { pokemon, showModal, onClose } = props;
	const [containerWidth, setContainerWidth] = useState(0);
	console.log(pokemon);

	// Get pixel width of the container with useRef, useEffect hook  and offsetWidth
	const containerRef = useRef(null);

	useEffect(() => {
		if (showModal) {
			setContainerWidth(containerRef.current.offsetWidth);
		}
	}, [showModal]);

	if (!showModal) {
		return null;
	}

	// type variable contains the first type of the pokemon
	const type = pokemon[0].types[0].type.name;
	pokemonType(type);
	console.log(pokemon[0].types[0].type.name);

	// let progressHP = containerWidth * pokemon[0].stats[0].base_stat/255
	// console.log('PROGRESS', progressHP)
	console.log("CONTAINER AFTER", containerWidth);

	console.log(
		"MATH",
		Math.floor((containerWidth * pokemon[0].stats[0].base_stat) / 255)
	);
	return (
		<div className="modal modal--open fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className=" modal__container w-[350px] lg:w-[500px] flex flex-col">
				<button
					className="modal__close text-white text-xl place-self-end"
					onClick={() => onClose()}
				>
					Close
				</button>
				<div className={`modal__header bg-${colorClass} h-[530px] p-2 rounded-2xl`}>
					<div className="flex justify-between align-center m-3 text-white">
						<h3 className="modal__name capitalize text-lg">{pokemon[0].name}</h3>
						<p className="modal__id">
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
                        className='modal__image absolute top-28 left-0 right-0 lg:relative m-auto lg:top-16 w-[150px] lg:w-[250px]'
					/>
					<div className="modal details-container bg-white p-3 m-2 rounded-2xl overflow-auto h-[390px] mt-20">
						<div className="details-container__type flex justify-center mt-10 lg:mt-20 mb-3">
							{pokemon[0].types.map((type) => {
								console.log(type.type.name);
								const singleType = type.type.name;
								pokemonType(singleType);
								return (
									<p
										key={type.slot}
										className={`inline-block p-1 pl-3 pr-3 rounded-2xl ml-2 mr-2 capitalize text-white bg-${colorClass}`}
									>
										{type.type.name}
									</p>
								);
							})}
                        </div>
                        {/* Calls pokemonType function again to set the default color to the first type (if pokemon has more than 1 type) */}
						{pokemonType(type)}
						<h4 className={`details-container__title flex justify-center text-${colorClass}`}>About</h4>
						<div className="details-container__info flex justify-between lg:ml-10 lg:mr-10 lg:mt-5 mb-5 content-end">
							<div className='text-center flex flex-col justify-end'>
								<span className="flex flow-row mb-3">
									<Image
										src="/weight-icon.png"
										alt="Weight icon"
										width={20}
										height={20}
									/>
									<p>{pokemon[0].weight / 10} kg</p>
								</span>
								<p className="mt-2 text-grey-200 text-sm">Weight</p>
							</div>
							<div className="text-center flex flex-col justify-end">
								<span className="flex flow-row mb-3">
									<Image
										src="/ruler.png"
										alt="Ruler icon"
										width={20}
										height={20}
									/>
									<p>{pokemon[0].height / 10} m</p>
								</span>
								<p className="mt-2 text-grey-200 text-sm">Height</p>
							</div>
							<div className="text-center flex flex-col justify-end">
								<span className="mb-3">
									<p className="capitalize">
										{pokemon[0].abilities.map((ability) => (
											<p key={ability.slot}>{ability.ability.name}</p>
										))}
									</p>
								</span>
								<p className="mt-2 text-grey-200 text-sm">Abilities</p>
							</div>
						</div>
						<h4 className={`details-container__title flex justify-center text-${colorClass}`}>Base Stats</h4>
						{/* Calls pokemonType function again to set the default color to the first type (if pokemon has more than 1 type) */}
						{pokemonType(type)}
                        {pokemon[0].stats.map((stat) => {
                            // Calls statName function to set a new stat label for each stat display
                            const name = stat.stat.name;
                            statName(name)

							return (
								<div className="details-container__stat flex justify-center align-center lg:m-3">  
                                    <p className="flex items-end mr-3 w-10">{newStatLabel}</p>
									<div
										ref={containerRef}
										className={`details-container__stat-bar flex-grow mt-2 bg-${colorClass} rounded-full bg-opacity-25`}
									>
										<div
											className={`bg-${colorClass} py-0 rounded-full opacity-100`}
										    style={{ width: `${Math.floor(containerWidth * stat.base_stat / 255)}px`}}
                                        >
											<div className="details-container__stat-name text-white text-sm inline-block bg-purple-700 px-2 rounded-full">
												{stat.base_stat}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
