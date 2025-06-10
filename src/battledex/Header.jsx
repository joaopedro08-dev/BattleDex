import { useState } from 'react';
import logo from '../assets/imgs/logo.png';
import HeaderResponsive from '../components/HeaderResponsive';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navbar = ["Pokedéx", "Canais", "Sobre"];
    const languages = ["🇧🇷 Português", "🇺🇸 English", "🇪🇸 Español", "🇯🇵 日本語", "🇫🇷 Français", "🇨🇳 普通话"];

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className='header w-full bg-[var(--color-red)] px-4 py-2 flex justify-between items-center'>
            <div className="flex items-center gap-2">
                <button
                    className='md:hidden text-white text-3xl bg-transparent border-none'
                    onClick={toggleMenu}
                    aria-label="Abrir menu"
                    aria-expanded={menuOpen}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <a href="/">
                    <img className='w-36 md:w-44' src={logo} alt="Logo" />
                </a>
            </div>

            <nav className="hidden md:flex flex-1 justify-center">
                <ul className='flex gap-8 list-none m-0 p-0'>
                    {navbar.map((item, index) => (
                        <li key={index} className='relative text-[var(--color-white)] font-medium text-base uppercase tracking-wider cursor-pointer
              transition-all duration-300 hover:[text-shadow:0_0_5px_var(--color-black)]
              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--color-black)]
              hover:after:w-full after:transition-all after:duration-300'>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="languages inline-block relative text-base font-medium">
                <details className="relative inline-block group">
                    <summary
                        className="list-none bg-white border border-gray-300 rounded-lg cursor-pointer transition-all duration-300 ease-in-out shadow-sm uppercase hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 px-3 py-1.5 flex items-center gap-2"
                        aria-label="Selecionar idioma"
                        pijama    >
                        Idiomas
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <ul className="language-options absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-md list-none z-[100] w-max min-w-36">
                        {languages.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-blue-100 hover:text-blue-800 px-4 py-2 text-sm"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </details>
            </div>

            <HeaderResponsive
                menuOpen={menuOpen}
                closeMenu={closeMenu}
                navbar={navbar}
            />
        </header>
    );
}

export default Header;