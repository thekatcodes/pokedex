//Variable and function that sets the modal bg based on the pokemon type
export let colorClass;

export function pokemonType(type) {
	switch (type) {
		case "bug":
			colorClass = "bug";
			break;
		case "dark":
			colorClass = "dark";
			break;
		case "dragon":
			colorClass = "dragon";
			break;
		case "electric":
			colorClass = "electric";
			break;
		case "fairy":
			colorClass = "fairy";
			break;
		case "fighting":
			colorClass = "fighting";
			break;
		case "fire":
			colorClass = "fire";
			break;
		case "flying":
			colorClass = "flying";
			break;
		case "ghost":
			colorClass = "ghost";
			break;
		case "grass":
			colorClass = "grass";
			break;
		case "ground":
			colorClass = "ground";
			break;
		case "ice":
			colorClass = "ice";
			break;
		case "normal":
			colorClass = "normal";
			break;
		case "poison":
			colorClass = "poison";
			break;
		case "psychic":
			colorClass = "psychic";
			break;
		case "rock":
			colorClass = "rock";
			break;
		case "steel":
			colorClass = "steel";
			break;
		case "water":
			colorClass = "water";
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