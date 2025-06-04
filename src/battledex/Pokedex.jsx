function Pokedex() {
    return (
        <div className="container">
            <div className="header-title">
                <h2 className="title">Pokédex</h2>
            </div>
            <div className="form-pokemon">
                <form action="#">
                    <div className="header-form-search">
                        <div className="form-group">
                            <label>Nome do Pokémon</label>
                            <input type="search" />
                        </div>
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <button type="button">Aleatório</button>
                    <div className="form-group">
                        <label>Organizar</label>
                        <select>
                            <option value="" disabled selected>Selecione...</option>
                            <option value="small">Menor número primeiro</option>
                            <option value="big">Maior número primeiro</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                        </select>
                    </div>
                </form>
                <div className="cards">
                    <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content"></div>
                    </div>

                    <button type="button">Carregar mais Pokémon</button>
                </div>
            </div>
        </div>
    )
}

export default Pokedex;