import React, { useState } from "react";
import Footer from "./components/Footer";
// import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import PokemonCard from "./PokemonCard";

function HomePage() {
	const [pokemonData, setPokemonData] = useState([]);

	//function to fetch pokemon data & set pokemon state
	const fetchPokemon = async (value) => {
		try {
			const result = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${value}`
			);
			console.log(result.data);
			setPokemonData(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		//     <Layout>
		//     <h1>Welcome to my Next.js app!</h1>
		// </Layout>
		<>
			<Navbar />
            <PokemonCard pokemonData={pokemonData} fetchPokemon={fetchPokemon} />
			<Footer />
		</>
	);
}

export default HomePage;
