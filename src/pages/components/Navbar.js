import React, { useEffect, useState } from "react";
import Image from "next/image";
import Filter from "./Filter";

export default function Navbar(props) {
	const { fetchPokemon } = props;

	const [searchValue, setSearchValue] = useState("");

	// Set searchValue state everytime the input field changes
	const searchInput = (event) => {
		setSearchValue(event.target.value);
	};
	console.log(searchValue);
	// useEffect listens for changes to the searchValue state, when it changes, it calls the fetchPokemon function with the new searchValue
	useEffect(() => {
		fetchPokemon(searchValue);
	}, [searchValue]);

	return (
        <div className="navbar text-center flex pt-4 pb-4 mb-12 bg-red">
            <Image
            src="/pokeball.png"
            alt="Pokeball Logo"
            width={50}
            height={50}
                className='navbar__logo ml-4 absolute'
            />
			<h1 className="navbar__logo-name absolute text-white ml-4 left-16">Pokedex</h1>
			<input
				className="navbar__search px-4 py-3 mx-auto rounded-full"
				type="search"
				value={searchValue}
				placeholder="Search Pokémon"
				onChange={(event) => searchInput(event)}
            ></input>
            <Filter />
		</div>
	);
}
