import React from "react";
import classNames from "classnames";

export default function Modal(props) {
    const { pokemon, showModal, onClose } = props;
	console.log(pokemon);
    
    let colorClass;
    function pokemonType(type) {
    
        switch (type) {
            case "bug":
                colorClass = "bg-bug";
                break;
            case "dark":
                colorClass = "bg-dark";
                break;
            case "dragon":
                colorClass = "bg-dragon";
                break;
            case "electric":
                colorClass = "bg-electric";
                break;
            case "fairy":
                colorClass = "bg-fairy";
                break;
            case "fighting":
                colorClass = "bg-fighting";
                break;
            case "fire":
                colorClass = "bg-fire";
                break;
            case "flying":
                colorClass = "bg-flying";
                break;
            case "ghost":
                colorClass = "bg-ghost";
                break;
            case "grass":
                colorClass = "bg-grass";
                break;
            case "ground":
                colorClass = "bg-ground";
                break;
            case "ice":
                colorClass = "bg-ice";
                break;
            case "normal":
                colorClass = "bg-normal";
                break;
            case "poison":
                colorClass = "bg-poison";
                break;
            case "psychic":
                colorClass = "bg-psychic";
                break;
            case "rock":
                colorClass = "bg-rock";
                break;
            case "steel":
                colorClass = "bg-steel";
                break;
            case "water":
                colorClass = "bg-water";
                break;
            default:
                colorClass = "";
                break;
        }
    
        // const typeClass = classNames("px-2 py-1 rounded-md text-white", colorClass);
        // return typeClass;
    }
    
    const type = pokemon[0].types[0].type.name;
    pokemonType(type)
    console.log(pokemon[0].types[0].type.name)


	if (!showModal) return null;

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
						src={pokemon[0].sprites.other.home.front_default}
						alt={pokemon[0].name}
					/>
					<div>
						{pokemon[0].types.map((type) => (
							<p key={type.slot}>{type.type.name}</p>
						))}
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
