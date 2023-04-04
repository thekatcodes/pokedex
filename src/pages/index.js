import React from "react";
import { useState } from "react";
import Layout from "./components/Layout";
import PokemonCard from "./PokemonCard";


function HomePage() {

    const [pokemonData, setPokemonData] = useState([])
    //function to fetch pokemon data & set pokemon state
    const fetchPokemon = async (value) => {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
            console.log(result.data);
            setPokemonData(result.data);
        } catch (error) {
            console.log(error);
        }
    
    }
    return (<Layout>
        <h1>Welcome to my Next.js app!</h1>
        <PokemonCard pokemonData={pokemonData} />
    </Layout>)
}

export default HomePage;
