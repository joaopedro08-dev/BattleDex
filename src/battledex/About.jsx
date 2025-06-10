
import AboutImage from '../assets/imgs/About.png';

function About() {
    return (
        <section className="about_us py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white ">
            <div className="about_us max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"> 
                <img src={AboutImage} alt="Logo do SigaAluno" className="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 object-contain h-auto" /> 
                <div className="about_us_text flex flex-col justify-center text-center lg:text-left">
                    <h2 className="title_about_us text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        Sobre o <span className="text-[var(--color-red)]">BattleDex</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
                        Bem-vindo ao <strong className="font-semibold">BattleDex</strong>, seu guia definitivo para dominar o mundo competitivo de Pokémon! Criado por Gabriel Marcelo e João Pedro, nosso objetivo é descomplicar as batalhas Pokémon e te ajudar a se tornar um treinador de elite.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
                        No BattleDex, você encontrará tudo o que precisa para iniciar sua jornada, desde uma introdução completa ao cenário competitivo e os fundamentos para construir times poderosos, até estratégias avançadas de batalha como previsão de jogadas e gestão de turnos. Vamos explorar as regras dos principais formatos, como Smogon Tiers e VGC, e te apresentar ferramentas essenciais como o Pokémon Showdown! e a Smogon University para aprimorar suas habilidades.
                    </p>

                </div>
            </div>
        </section>

    );
}

export default About;