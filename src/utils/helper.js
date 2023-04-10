//Variable and function that sets the modal bg based on the pokemon type
export let colorClass;

export function pokemonType(type) {
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



//Variable and function that sets a new stat label based on the api stat name
export let newStatLabel;

export function statName(name) {
    switch (name) {
        case "hp":
            newStatLabel = "HP";
            break;
        case "attack":
            newStatLabel = "ATK";
            break;
        case "defense":
            newStatLabel = "DEF";
            break;
        case "special-attack":
            newStatLabel = "SATK";
            break;
        case "special-defense":
            newStatLabel = "SDEF";
            break;
        case "speed":
            newStatLabel = "SPD";
            break;
       
        default:
            newStatLabel = "";
            break;
    }
}