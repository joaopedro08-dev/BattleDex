import { useRef, useState } from "react";
import CardPokedex from "../components/CardPokedex";

function Pokedex() {
  const inputSearch = useRef(null);
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState("");

  const searchPokemon = async (e) => {
    e.preventDefault();
    setError("");

    const pokemonName = inputSearch.current.value.toLowerCase();
    if (!pokemonName) {
      setError("Digite o nome de um Pokémon!");
      return;
    }

    const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Pokémon não encontrado!");
      }

      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      setPokemonData(null);
      setError(error.message);
    }
  };

  return (
    <div className="pokedex bg-[var(--color-red)] border-8 border-solid border-[--color-black] rounded-[15px] shadow max-w-[40%] w-full ">
      <h1 className="text-center font-bold text-4xl text-white">Pokédex</h1>
      <div className="tela bg-white border-4 border-solid border-[#555] rounded-2xl text-center shadow-2xs w-[80%]">
        <div className="">
          <form onSubmit={searchPokemon}>
            <input
              type="search"
              className="search-input border-2 border-solid border-[#ccc] rounded-[5px] w-[200px]"
              placeholder="Digite um Pokémon..."
              ref={inputSearch}
            />
            <button type="submit" className="procurar bg-[var(--color-black)] text-white border-none rounded-[5px] cursor-pointer">
              Procurar
            </button>
          </form>

          {error && <div className="text-red-500 font-medium">{error}</div>}

          {pokemonData ? (
            <CardPokedex pokemon={pokemonData} />
          ) : (
            <div className="placeholder-text">Digite um Pokémon</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pokedex;