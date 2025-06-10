function CardPokedex({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="cards flex flex-wrap gap-5 justify-center">
      <div className="card bg-white rounded-xl shadow-md w-[200px] text-center transition transform duration-200 ease-in-out cursor-pointer hover:shadow-lg hover:scale-105 p-4"> 
        <div className="card-image flex justify-center items-center h-32"> 
          <img
            className="w-28 h-28 object-contain"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="card-content mt-2"> 
          <span className="number-pokedex font-bold text-gray-700 text-xl block"> 
            #{pokemon.id.toString().padStart(3, '0')} 
          </span>
          <h3 className="text-xl font-semibold capitalize text-gray-800 mb-2">{pokemon.name}</h3> 
          <div className="flex justify-center gap-2.5">
            {pokemon.types.map((typeObj) => (
              <span
                className="type rounded-full text-xs font-semibold capitalize px-3 py-1 bg-gray-200 text-gray-700" 
                key={typeObj.type.name}
              >
                {typeObj.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPokedex;