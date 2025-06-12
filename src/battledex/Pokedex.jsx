import { useState, useEffect, useCallback } from 'react';
import HeaderPokedex from '../components/HeaderPokedex';
import ContentPokedex from '../components/ContentPokedex';

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [offset, setOffset] = useState(0); 
    const [totalPokemons, setTotalPokemons] = useState(0); 
    const limit = 12; 

    const fetchPokemons = useCallback(async (term = '', offset = 0) => {
        setLoading(true);
        setError(null);
        try {
            let url;
            let results = [];

            if (term.trim() === '') {
                url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Falha ao carregar Pokémon iniciais.');
                }
                const data = await response.json();
                setTotalPokemons(data.count); 

                results = await Promise.all(
                    data.results.map(async (p) => {
                        const res = await fetch(p.url);
                        const details = await res.json();
                        return {
                            id: String(details.id).padStart(4, '0'),
                            name: details.name.charAt(0).toUpperCase() + details.name.slice(1),
                            types: details.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)),
                            img: details.sprites.other['official-artwork'].front_default || details.sprites.front_default
                        };
                    })
                );
            } else {
                try {
                    url = `https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}/`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Pokémon não encontrado!');
                    }
                    const data = await response.json();
                    const pokemonDetails = {
                        id: String(data.id).padStart(4, '0'),
                        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                        types: data.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)),
                        img: data.sprites.other['official-artwork'].front_default || data.sprites.front_default
                    };
                    results = [pokemonDetails];
                    setTotalPokemons(1);
                } catch (singleFetchError) {
                    results = [];
                    if (singleFetchError.message === 'Pokémon não encontrado!') {
                        setError(singleFetchError.message);
                    } else {
                        console.error("Erro na busca de Pokémon:", singleFetchError);
                        setError("Ocorreu um erro ao buscar o Pokémon.");
                    }
                }
            }

            setPokemons(results);

        } catch (err) {
            console.error("Erro geral no fetch de Pokémon:", err);
            setError(err.message || "Ocorreu um erro inesperado.");
            setPokemons([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const timer = setTimeout(() => {
            setOffset(0); 
            fetchPokemons(searchTerm, 0);
        }, 300);

        setDebounceTimeout(timer);

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [searchTerm, fetchPokemons]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleNext = () => {
        setOffset((prevOffset) => prevOffset + limit);
        fetchPokemons(searchTerm, offset + limit);
    };

    const handlePrevious = () => {
        setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
        fetchPokemons(searchTerm, Math.max(offset - limit, 0));
    };

    return (
        <>
            <HeaderPokedex onSearch={handleSearch} />
            <ContentPokedex
                pokemons={pokemons}
                loading={loading}
                error={error}
                searchTerm={searchTerm}
                onNext={handleNext}
                onPrevious={handlePrevious}
                canGoBack={offset > 0}
                canGoForward={offset + limit < totalPokemons}
            />
        </>
    );
}

export default Pokedex;