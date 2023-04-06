import React, { useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PokemonCard from "./PokemonCard";

function HomePage() {

	const [pokemonData, setPokemonData] = useState([]);

	//function to fetch pokemon data & set pokemon state
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
                console.log([result.data]);
                setPokemonData([result.data]);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const result = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/`,
                    {
                        headers: {
                            Accept: "application/json",
                            "Accept-Encoding": "identity",
                        },
                    }
                );
                console.log(result.data.results);
                setPokemonData(result.data.results);
            } catch (error) {
                console.log(error);
            }
        }
	};
console.log("INDEX", pokemonData)
	return (
		<>
			<Navbar
				fetchPokemon={fetchPokemon}
			/>
			<PokemonCard
				pokemonData={pokemonData}
			/>
			<Footer />
		</>
	);
}

export default HomePage;
