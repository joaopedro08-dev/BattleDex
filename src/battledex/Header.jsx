import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/imgs/logo.png';
import HeaderResponsive from '../components/HeaderResponsive';
import HeaderLanguage from '../components/HeaderLanguage';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();
    const navbar = [
        { key: "aboutNav", text: t("aboutNav") },
        { key: "pokedexNav", text: t("pokedexNav") },
        { key: "channelsNav", text: t("channelsNav") }
    ];

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className='header w-full bg-[var(--color-red)] px-4 py-2 flex justify-between items-center'>
            <div className="flex items-center gap-2">
                <button
                    className='md:hidden text-white text-3xl bg-transparent border-none'
                    onClick={toggleMenu}
                    aria-label={t("openMenu")}
                    aria-expanded={menuOpen}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <a href="/">
                    <img className='w-36 md:w-44' src={logo} alt={t("logoAltText")} />
                </a>
            </div>

            <nav className="hidden md:flex flex-1 justify-center">
                <ul className='flex gap-8 list-none m-0 p-0'>
                    {navbar.map((item) => (
                        <li key={item.key}>
                            <button
                                type='button'
                                onClick={() => {
                                    closeMenu(); // fecha o menu antes
                                    setTimeout(() => {
                                        const section = document.getElementById(item.key);
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }, 100); // 100ms para garantir que a seção esteja no DOM
                                }}

                                className='relative text-[var(--color-white)] font-medium text-base uppercase tracking-wider cursor-pointer
                transition-all duration-300 hover:[text-shadow:0_0_5px_var(--color-black)]
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--color-black)]
                hover:after:w-full after:transition-all after:duration-300 bg-transparent border-none'
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <HeaderLanguage />
            <HeaderResponsive
                menuOpen={menuOpen}
                closeMenu={closeMenu}
                navbar={navbar}
            />
        </header>
    );
}

export default Header;