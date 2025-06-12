import { useTranslation } from "react-i18next";

function getColorForType(type, t) {
    const translatedType = t(`types.${type.toLowerCase()}`);
    const typeColors = {
        grass: "#78C850",
        poison: "#A040A0",
        fire: "#F08030",
        water: "#6890F0",
        bug: "#A8B820",
        flying: "#A890F0",
        normal: "#A8A878",
        electric: "#F8D030",
        psychic: "#F85888",
        ice: "#98D8D8",
        dragon: "#7038F8",
        fighting: "#C03028",
        rock: "#B8A038",
        ground: "#E0C068",
        ghost: "#705898",
        steel: "#B8B8D0",
        fairy: "#EE99AC",
        dark: "#705848",
    };
    return {
        color: typeColors[type.toLowerCase()] || "#888",
        name: translatedType || type
    };
}

function ContentPokedex({ pokemons, loading, error, searchTerm, onNext, onPrevious, canGoBack, canGoForward }) {
    const { t } = useTranslation();

    return (
        <div className="pokedex-content w-full max-w-7xl mx-auto px-4 py-8">
            {loading && <p className="text-xl text-gray-700 text-center">{t("loading")}</p>}
            {error && <p className="text-xl text-red-600 text-center">{t("error")}: {error}</p>}
            {!loading && !error && pokemons.length === 0 && searchTerm.trim() !== '' && (
                <p className="text-xl text-gray-700 text-center">
                    {t("notFound", { term: searchTerm })}
                </p>
            )}

            {!loading && !error && pokemons.length > 0 && (
                <>
                    <div className="pokedex-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {pokemons.map((p) => (
                            <div
                                key={p.id}
                                className="pokemon-card bg-white flex flex-col items-center rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.02] px-4 py-5"
                            >
                                <img src={p.img} alt={p.name} className="w-24 h-24 object-contain mb-2" />
                                <span className="pokemon-id text-xs text-gray-500">{t("number")} {p.id}</span>
                                <strong className="pokemon-name text-lg font-bold">{p.name}</strong>
                                <div className="pokemon-types flex gap-1 flex-wrap justify-center">
                                    {p.types.map((tKey) => {
                                        const { color, name } = getColorForType(tKey, t);
                                        return (
                                            <span
                                                key={tKey}
                                                className="pokemon-type text-white text-xs rounded-full font-medium px-2 py-1"
                                                style={{ backgroundColor: color }}
                                            >
                                                {name}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {searchTerm.trim() === '' && (
                        <div className="button-container flex justify-center gap-4 mt-6">
                            {canGoBack && (
                                <button
                                    onClick={onPrevious}
                                    className="button bg-black text-white rounded-md hover:bg-gray-600 transition flex items-center gap-2 px-4 py-2"
                                    aria-label={t("aria.back")}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    {t("back")}
                                </button>
                            )}
                            {canGoForward && (
                                <button
                                    onClick={onNext}
                                    className="button bg-[var(--color-red)] text-white rounded-md hover:bg-red-600 transition flex items-center gap-2 px-4 py-2"
                                    aria-label={t("aria.next")}
                                >
                                    {t("next")}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default ContentPokedex;
