import About from "./About";
import Channels from "./Channels";
import Pokedex from "./Pokedex";
import Training from "./training";

function Main(){
    return (
        <main>
            <Pokedex />
            <Training />
            <Channels />
            <About />
        </main>
    )
}

export default Main;