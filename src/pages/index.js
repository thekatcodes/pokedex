import React, { useState } from "react";
import Footer from "./components/Footer";
import axios from "axios";
// import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import PokemonCard from "./PokemonCard";

function HomePage() {
	const [searchValue, setSearchValue] = useState("");
	const [pokemonData, setPokemonData] = useState([]);

	// Set searchValue state everytime the input field changes
	const searchInput = (event) => {
		setSearchValue(event.target.value);
	};
	console.log(searchValue);

	//function to fetch pokemon data & set pokemon state
	const fetchPokemon = async (value) => {
		try {
			const result = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${value}`,
				{
					headers: {
						Accept: "application/json",
						"Accept-Encoding": "identity",
					},
				}
			);
			console.log(result.data);
			setPokemonData(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Navbar
				searchValue={searchValue}
				searchInput={searchInput}
			/>
			<PokemonCard
				pokemonData={pokemonData}
				fetchPokemon={fetchPokemon}
			/>
			<Footer />
		</>
	);
}

export default HomePage;
