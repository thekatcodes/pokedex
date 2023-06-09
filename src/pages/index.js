import React, { useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PokemonCard from "./PokemonCard";

function HomePage() {
	const [pokemonData, setPokemonData] = useState([]);

	// Function to fetch pokemon data & set pokemon state
	const fetchPokemon = async (value) => {
		if (value) {
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
				// console.log([result.data]);
				setPokemonData([result.data]);
			} catch (error) {
				console.log(error);
			}
		} else {
			// Fetch default api data for 20 pokemons
			try {
				const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
					headers: {
						Accept: "application/json",
						"Accept-Encoding": "identity",
					},
				});
				console.log(result.data.results);

				// Create new empty array (defaultData) and for each of the 20 pokemon, make get request to their specific api endpoint and push the retrieved data to defaultData array
				let defaultData = [];
				for (let i = 0; i < result.data.results.length; i++) {
					const newResult = await axios.get(result.data.results[i].url);
					defaultData.push(newResult.data);
				}
				console.log(defaultData);
				// setPokemonData state with defaultData array that contains all 20 pokemons data
				setPokemonData(defaultData);
			} catch (error) {
				console.log(error);
			}
		}
	};

    console.log("INDEX", pokemonData);
    
    // useEffect(() => {
    //     console.log('pokemonData after update', pokemonData);
    //   }, [pokemonData]);


	// Function to fetch pokemon data by type & set pokemon state
	const fetchFilter = async (value) => {
		if (value) {
			try {
				const result = await axios.get(
					`https://pokeapi.co/api/v2/type/${value}`
                );
                
				const pokemonList = result.data.pokemon;
				let filterData = [];
				await Promise.all(pokemonList.map(async (item) => {
					const result = await axios.get(item.pokemon.url);
                    filterData.push(result.data);
                    console.log(item.pokemon.url)
				}));
                setPokemonData(filterData);
                console.log('filterData', filterData)
			} catch (e) {
				console.log(e);
			}
		}
	};

	console.log("FILTER AFTER", pokemonData);

	return (
		<>
			<Navbar
				fetchPokemon={fetchPokemon}
				fetchFilter={fetchFilter}
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
