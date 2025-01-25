import React, { useState } from 'react';
import './Pokemon.css';

function Pokemon() {
    const [pokemonList, setPokemonList] = useState([]);

    function fetchPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1300')
        .then(response => response.json())
        .then(data => {
            const pokemonWithImages = data.results.map((pokemon, index) => ({
                name: pokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }));
            setPokemonList(pokemonWithImages);
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="pokemon-container">
            <h1 className="pokemon-title">PokeMons</h1>
            <button className="fetch-button" onClick={fetchPokemon}>Load Pokemon</button>
            <div className="pokemon-grid">
                {pokemonList.map(pokemon => (
                    <div className="pokemon-card" key={pokemon.name}>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <h3>{pokemon.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pokemon;